const express = require('express');
const router = express.Router();

const loginUser = require('../models/login');
bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, user_password } = req.body;

  const user = new loginUser(email, user_password);

  const loginResponse = await user.login(email);

  if (typeof loginResponse.id === 'number') {
    console.log('Login route line 15: ' + loginResponse.username);
    res.json({
      userId: loginResponse.id,
      userName: loginResponse.username,
    }).status(200);
  } else {
    res.json({
      userId: null,
      userName: null,
    }).status(401);
  }
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;