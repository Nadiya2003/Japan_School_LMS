const express = require('express');
const {
  getCourses,
  getCourseBySlug,
  createCourse,
  updateCourse,
  deleteCourse,
  enrollCourse,
  getMyCourses,
} = require('../../../controllers/courseController');
const { protect, authorize } = require('../../../middleware/auth');

const router = express.Router();

router.get('/', getCourses);
router.get('/my-courses', protect, getMyCourses);
router.get('/:slug', getCourseBySlug);

router.post('/:id/enroll', protect, enrollCourse);

router.post('/', protect, authorize('teacher', 'admin'), createCourse);
router.put('/:id', protect, authorize('teacher', 'admin'), updateCourse);
router.delete('/:id', protect, authorize('admin'), deleteCourse);

module.exports = router;
