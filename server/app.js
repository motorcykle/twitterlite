// dependencies
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const express = require('express');

// routers
const tweetsRouter = require('./routers/tweets/tweetsRouter');
const usersRouter = require('./routers/users/usersRouter');

const app = express();

if (process.env.NODE_ENV === 'production') {
  const buildPath = path.join(__dirname, '..', 'build');
  app.use(express.static(buildPath));
}

// middlewares
app.use(cors(), morgan('short'), helmet(), express.json());

// middleware routes
app.use('/api/users', usersRouter);
app.use('/api/tweets', tweetsRouter);

module.exports = app;