const express = require('express');
const { body } = require('express-validator');
const {
  submitContact,
  getMessages,
  updateMessageStatus,
} = require('../../../controllers/contactController');
const { protect, authorize } = require('../../../middleware/auth');
const { contactLimiter } = require('../../../middleware/rateLimiter');
const validate = require('../../../middleware/validate');

const router = express.Router();

const contactRules = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('subject').trim().notEmpty().withMessage('Subject is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

router.post('/', contactLimiter, contactRules, validate, submitContact);

router.get('/', protect, authorize('admin'), getMessages);
router.put('/:id', protect, authorize('admin'), updateMessageStatus);

module.exports = router;
