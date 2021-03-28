const express = require('express');
const tweetsMethods = require('./tweetsMethods.js');
const { verifyToken } = require('../../authentication/auth.js');
const router = express.Router();

router.get('/all/:username', verifyToken, tweetsMethods.getUserTweets);
router.get('/one/:tweetId', verifyToken, tweetsMethods.getTweet);
router.post('/create', verifyToken, tweetsMethods.createTweet);
router.patch('/inc/:tweetId/:type', verifyToken, tweetsMethods.changeTweetByInc);

module.exports = router;