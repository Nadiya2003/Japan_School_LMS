const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    console.error(`Please make sure your MongoDB server is running on ${process.env.MONGODB_URI}`);
    if (process.env.NODE_ENV !== 'development') {
      process.exit(1);
    } else {
      console.warn('⚠️ Server will continue running in development mode without database connection.');
    }
  }
};

module.exports = connectDB;
