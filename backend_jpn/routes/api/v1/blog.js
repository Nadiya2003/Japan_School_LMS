const express = require('express');
const {
  getPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
} = require('../../../controllers/blogController');
const { protect, authorize } = require('../../../middleware/auth');

const router = express.Router();

router.get('/', getPosts);
router.get('/:slug', getPostBySlug);

router.post('/', protect, authorize('teacher', 'admin'), createPost);
router.put('/:id', protect, authorize('teacher', 'admin'), updatePost);
router.delete('/:id', protect, authorize('admin'), deletePost);

module.exports = router;
