const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const compression = require('compression');
const path = require('path');

// Configs
const { validateEnv } = require('./config/env');
const connectDB = require('./config/db');

// Middlewares
const errorHandler = require('./middleware/errorHandler');
const { apiLimiter } = require('./middleware/rateLimiter');

// Validate Env variables
validateEnv();

// Connect to database
connectDB();

const app = express();

// --- Security & Utility Middlewares ---
app.use(helmet()); // Set security HTTP headers
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
  })
);
app.use(express.json({ limit: '10kb' })); // Body parser
app.use(mongoSanitize()); // Prevent NoSQL injections
app.use(xss()); // Prevent XSS
app.use(hpp()); // Prevent HTTP Parameter Pollution
app.use(compression()); // Compress responses

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev')); // Logging
}

// Apply global rate limiting to all /api routes
app.use('/api', apiLimiter);

// --- Static Folders ---
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// --- Routes ---
const authRoutes = require('./routes/api/v1/auth');
const courseRoutes = require('./routes/api/v1/courses');
const blogRoutes = require('./routes/api/v1/blog');
const contactRoutes = require('./routes/api/v1/contact');
const userRoutes = require('./routes/api/v1/users');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/blog', blogRoutes);
app.use('/api/v1/contact', contactRoutes);
app.use('/api/v1/users', userRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to WorldLanka Japan LMS API' });
});

// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'API endpoint not found' });
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Error: ${err.message}`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
