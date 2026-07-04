const ContactMessage = require('../models/ContactMessage');
const asyncHandler = require('../utils/asyncHandler');
const sendEmail = require('../utils/sendEmail');

// @desc    Submit contact form
// @route   POST /api/v1/contact
// @access  Public
exports.submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const contact = await ContactMessage.create({
    name,
    email,
    phone,
    subject,
    message,
    ipAddress: req.ip,
  });

  // Send confirmation email to user
  try {
    await sendEmail({
      email,
      subject: `We received your message — WorldLanka`,
      html: `
        <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;">
          <h2 style="color:#1D4FD8;">Thank you, ${name}!</h2>
          <p>We've received your message and will respond within 24 hours.</p>
          <p style="color:#6b7280;"><strong>Your message:</strong><br/>${message}</p>
          <hr/>
          <p style="color:#9ca3af;font-size:12px;">© ${new Date().getFullYear()} WorldLanka Japanese Education</p>
        </div>
      `,
    });
  } catch (emailError) {
    // Don't fail the request if email sending fails
    console.warn('Contact confirmation email failed:', emailError.message);
  }

  res.status(201).json({
    success: true,
    message: 'Your message has been received. We will get back to you shortly.',
    data: { id: contact._id },
  });
});

// @desc    Get all contact messages (admin)
// @route   GET /api/v1/contact
// @access  Private (admin)
exports.getMessages = asyncHandler(async (req, res) => {
  const { status, page = 1, limit = 20 } = req.query;
  const query = {};
  if (status) query.status = status;

  const skip = (parseInt(page) - 1) * parseInt(limit);
  const total = await ContactMessage.countDocuments(query);

  const messages = await ContactMessage.find(query)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));

  res.status(200).json({
    success: true,
    count: messages.length,
    total,
    data: messages,
  });
});

// @desc    Update message status
// @route   PUT /api/v1/contact/:id
// @access  Private (admin)
exports.updateMessageStatus = asyncHandler(async (req, res) => {
  const message = await ContactMessage.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  if (!message) {
    return res.status(404).json({ success: false, message: 'Message not found' });
  }

  res.status(200).json({ success: true, data: message });
});
