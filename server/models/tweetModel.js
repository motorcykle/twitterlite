const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  user: { type: Object, required: true },
  text: { type: String, required: true },
  tweetType: { type: String, default: "Normal" }, // Normal or Retweet
  likers: { type: Array, default: [] },
  retweeters: { type: Array, default: [] },
}, {
  timestamps: true
});

module.exports = mongoose.model('Tweet', tweetSchema);