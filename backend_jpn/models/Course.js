const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  videoUrl: String,
  duration: Number, // minutes
  order: { type: Number, required: true },
  isFree: { type: Boolean, default: false },
});

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a course title'],
      trim: true,
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a course description'],
    },
    shortDescription: {
      type: String,
      maxlength: [200, 'Short description cannot exceed 200 characters'],
    },
    level: {
      type: String,
      enum: ['N5', 'N4', 'N3', 'N2', 'N1', 'Conversation', 'Business', 'Kanji'],
      required: true,
    },
    category: {
      type: String,
      enum: ['JLPT', 'Conversation', 'Business', 'Kanji', 'Grammar', 'Vocabulary'],
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    discountPrice: {
      type: Number,
      min: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
    thumbnail: {
      type: String,
      default: '',
    },
    lessons: [lessonSchema],
    totalDuration: Number, // computed in minutes
    enrollmentCount: {
      type: Number,
      default: 0,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    prerequisites: [String],
    whatYouLearn: [String],
    language: {
      type: String,
      default: 'English',
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Auto-generate slug from title
courseSchema.pre('save', function (next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, '')
      .replace(/\s+/g, '-');
  }
  // Compute total duration from lessons
  if (this.lessons && this.lessons.length > 0) {
    this.totalDuration = this.lessons.reduce((acc, l) => acc + (l.duration || 0), 0);
  }
  next();
});

module.exports = mongoose.model('Course', courseSchema);
