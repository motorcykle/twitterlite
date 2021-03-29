const bcrypt = require('bcrypt');
const User = require('../../models/userModel.js');
const { generateToken } = require('../../authentication/auth.js');

module.exports = {
  checkUsername (req, res) {
    // router.post('/search/:username', )
    User.findOne({ username: req.params.username })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err))
  },

  searchUsers (req, res) {
    // router.post('/search/users/:query', )
    const regex = new RegExp(`/^${req.params.query}/`)
    console.log(regex)
    User.find({ username: { $regex: `^${req.params.query}`, $options: 'x' } })
      .then(data => res.status(200).json(data))
      .catch(err => res.status(500).json(err))
  },

  registerUser (req, res) {
    // router.post('/register', )
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    User.create({
      name: req.body.name,
      username: req.body.username,
      passwordHash: hash
    }).then(data => {
      res.status(201).json(data);
    }).catch(err => {
      res.status(500).json(err);
    })
  },

  loginUser (req, res) {
    // router.post('/login', )
    User.findOne({ username: req.body.username })
      .then(data => {
        if (data) {
          const match = bcrypt.compareSync(req.body.password, data.passwordHash);
          if (match) {
            const {_id, name, username, profileImage, followers, following} = data;
            res.status(200).json({
              user: {_id, name, username, profileImage, followers, following},
              token: generateToken(data._id)
            })
          } else {
            res.status(409).json({
              message: 'password doesnt match username'
            })
          }
        } else {
          res.status(404).json({
            message: "user with that username doesnt exist"
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  },

  followTypeChange (req, res) {
    // router.patch('/follow/:type/:username', )
    User.updateOne(
      { username: req.params.username }, 
      { $addToSet: { [req.params.type]: req.body.username } }
    )
      .then(data => res.status(201).json(data))
      .catch(err => console.error(err));
  },

  unfollowTypeChange (req, res) {
    // router.patch('/unfollow/:type/:username', )
    User.updateOne(
      { username: req.params.username }, 
      { $pull: { [req.params.type]: req.body.username } }
    )
      .then(data => res.status(201).json(data))
      .catch(err => console.error(err));
  },
}