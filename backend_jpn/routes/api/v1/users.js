const express = require('express');
const User = require('../../../models/User');
const asyncHandler = require('../../../utils/asyncHandler');
const { protect, authorize } = require('../../../middleware/auth');

const router = express.Router();

// All user routes are protected and restricted to admin
router.use(protect);
router.use(authorize('admin'));

// @desc    Get all users
// @route   GET /api/v1/users
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const users = await User.find().select('-password');
    res.status(200).json({ success: true, count: users.length, data: users });
  })
);

// @desc    Update user role
// @route   PUT /api/v1/users/:id/role
router.put(
  '/:id/role',
  asyncHandler(async (req, res) => {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true, runValidators: true }
    ).select('-password');

    res.status(200).json({ success: true, data: user });
  })
);

module.exports = router;
