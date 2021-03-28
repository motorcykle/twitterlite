const express = require('express');
const tweetsMethods = require('./tweetsMethods.js');
const { verifyToken } = require('../../authentication/auth.js');
const router = express.Router();


module.exports = router;