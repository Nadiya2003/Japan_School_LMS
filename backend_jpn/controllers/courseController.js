const Course = require('../models/Course');
const Enrollment = require('../models/Enrollment');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all published courses (with filters)
// @route   GET /api/v1/courses
// @access  Public
exports.getCourses = asyncHandler(async (req, res) => {
  const { level, category, search, sort, page = 1, limit = 12 } = req.query;

  const query = { isPublished: true };
  if (level) query.level = level;
  if (category) query.category = category;
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
    ];
  }

  const sortOptions = {
    newest: { createdAt: -1 },
    popular: { enrollmentCount: -1 },
    rating: { rating: -1 },
    price_asc: { price: 1 },
    price_desc: { price: -1 },
  };

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const total = await Course.countDocuments(query);

  const courses = await Course.find(query)
    .populate('teacher', 'name avatar')
    .sort(sortOptions[sort] || sortOptions.newest)
    .skip(skip)
    .limit(parseInt(limit))
    .select('-lessons');

  res.status(200).json({
    success: true,
    count: courses.length,
    total,
    totalPages: Math.ceil(total / parseInt(limit)),
    currentPage: parseInt(page),
    data: courses,
  });
});

// @desc    Get single course by slug
// @route   GET /api/v1/courses/:slug
// @access  Public
exports.getCourseBySlug = asyncHandler(async (req, res) => {
  const course = await Course.findOne({ slug: req.params.slug, isPublished: true })
    .populate('teacher', 'name avatar bio');

  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }

  res.status(200).json({ success: true, data: course });
});

// @desc    Create course
// @route   POST /api/v1/courses
// @access  Private (teacher, admin)
exports.createCourse = asyncHandler(async (req, res) => {
  req.body.teacher = req.user._id;
  const course = await Course.create(req.body);
  res.status(201).json({ success: true, data: course });
});

// @desc    Update course
// @route   PUT /api/v1/courses/:id
// @access  Private (teacher owns it, or admin)
exports.updateCourse = asyncHandler(async (req, res) => {
  let course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }

  if (course.teacher.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Not authorized to update this course' });
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: course });
});

// @desc    Delete course
// @route   DELETE /api/v1/courses/:id
// @access  Private (admin)
exports.deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }

  await course.deleteOne();
  res.status(200).json({ success: true, message: 'Course deleted' });
});

// @desc    Enroll in a course
// @route   POST /api/v1/courses/:id/enroll
// @access  Private
exports.enrollCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);
  if (!course) {
    return res.status(404).json({ success: false, message: 'Course not found' });
  }

  const existing = await Enrollment.findOne({ user: req.user._id, course: course._id });
  if (existing) {
    return res.status(400).json({ success: false, message: 'Already enrolled in this course' });
  }

  const enrollment = await Enrollment.create({
    user: req.user._id,
    course: course._id,
  });

  // Increment enrollment count
  await Course.findByIdAndUpdate(course._id, { $inc: { enrollmentCount: 1 } });

  res.status(201).json({ success: true, data: enrollment });
});

// @desc    Get user enrollments
// @route   GET /api/v1/courses/my-courses
// @access  Private
exports.getMyCourses = asyncHandler(async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.user._id })
    .populate({
      path: 'course',
      select: 'title slug level thumbnail teacher',
      populate: { path: 'teacher', select: 'name avatar' },
    })
    .sort({ lastAccessedAt: -1 });

  res.status(200).json({ success: true, count: enrollments.length, data: enrollments });
});
