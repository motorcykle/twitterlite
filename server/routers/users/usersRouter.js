const express = require('express');
const usersMethods = require('./usersMethods.js');
const router = express.Router();

router.get('/search/:username', usersMethods.checkUsername);
router.get('/search/users/:query', usersMethods.searchUsers);
router.post('/register', usersMethods.registerUser);
router.post('/login', usersMethods.loginUser);
router.patch('/follow/:type/:username', usersMethods.followTypeChange);

module.exports = router;