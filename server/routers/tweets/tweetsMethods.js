const Tweet = require('../../models/tweetModel.js');

module.exports = {
  
  getUserTweets (req, res) {
    // router.get('/all/:userId', verifyToken,  )
    Tweet.find({ 'user.username': req.params.username })
      .then(data => {
        res.status(200).json(data)
      }).catch(err => {
        res.status(500).json(err)
      })
  },
  
  getTweet (req, res) {
    // router.get('/one/:tweetId', verifyToken,  )
  },
  
  createTweet (req, res) {
    // router.post('/create', verifyToken,  )
    Tweet.create(req.body)
      .then(data => {
        res.status(201).json(data)
      }).catch(err => {
        res.status(500).json(err)
      })
  },
  
  changeTweetByInc (req, res) {
    // router.patch('/inc/:tweetId/:type', verifyToken,  )
    // SET SHOULD ONLY BE DONE ONCE WITH USERNAME
    Tweet.updateOne(
      { _id: req.params.tweetId },
      { $addToSet: { [req.params.type == 'retweet' ? 'retweeters' : 'likers']: req.body.username } }
    ).then(data => {
      res.status(200).json(data);
    }).catch(err => {
      res.status(500).json(err);
    })
  },
  
}
