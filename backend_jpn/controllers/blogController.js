const BlogPost = require('../models/BlogPost');
const asyncHandler = require('../utils/asyncHandler');

// @desc    Get all published blog posts
// @route   GET /api/v1/blog
// @access  Public
exports.getPosts = asyncHandler(async (req, res) => {
  const { category, search, page = 1, limit = 9 } = req.query;
  const query = { isPublished: true };

  if (category) query.category = category;
  if (search) {
    query.$or = [
      { title: { $regex: search, $options: 'i' } },
      { excerpt: { $regex: search, $options: 'i' } },
    ];
  }

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const total = await BlogPost.countDocuments(query);

  const posts = await BlogPost.find(query)
    .populate('author', 'name avatar')
    .sort({ publishedAt: -1 })
    .skip(skip)
    .limit(parseInt(limit))
    .select('-content');

  res.status(200).json({
    success: true,
    count: posts.length,
    total,
    totalPages: Math.ceil(total / parseInt(limit)),
    currentPage: parseInt(page),
    data: posts,
  });
});

// @desc    Get single blog post by slug
// @route   GET /api/v1/blog/:slug
// @access  Public
exports.getPostBySlug = asyncHandler(async (req, res) => {
  const post = await BlogPost.findOne({ slug: req.params.slug, isPublished: true })
    .populate('author', 'name avatar bio');

  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  // Increment view count
  await BlogPost.findByIdAndUpdate(post._id, { $inc: { viewCount: 1 } });

  res.status(200).json({ success: true, data: post });
});

// @desc    Create blog post
// @route   POST /api/v1/blog
// @access  Private (teacher, admin)
exports.createPost = asyncHandler(async (req, res) => {
  req.body.author = req.user._id;
  const post = await BlogPost.create(req.body);
  res.status(201).json({ success: true, data: post });
});

// @desc    Update blog post
// @route   PUT /api/v1/blog/:id
// @access  Private (author, admin)
exports.updatePost = asyncHandler(async (req, res) => {
  let post = await BlogPost.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  if (post.author.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
    return res.status(403).json({ success: false, message: 'Not authorized' });
  }

  post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: post });
});

// @desc    Delete blog post
// @route   DELETE /api/v1/blog/:id
// @access  Private (admin)
exports.deletePost = asyncHandler(async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  if (!post) {
    return res.status(404).json({ success: false, message: 'Post not found' });
  }

  await post.deleteOne();
  res.status(200).json({ success: true, message: 'Post deleted' });
});
