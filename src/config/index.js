require('dotenv').config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  /**
   * Port the app should run on
   */
  port: parseInt(process.env.PORT) || 5050,

  /**
   * Database the app should connect to
   */
  databaseURL: process.env.MONGODB_URI || "mongodb+srv://test:test1234@cluster0.vsflx.mongodb.net/test?retryWrites=true&w=majority",

  /**
   * The secret sauce to validate JWT
   */
  jwtSecret: process.env.JWT_SECRET,

  /**
   * Used by Winston logger
   */
  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  /**
   * API configs
   */
  api: {
    prefix: '/api',
  },
};
