const express = require('express');
const router = express.Router();

const loginUser = require('../models/login');
bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { email, user_password } = req.body;

  const user = new loginUser(email, user_password);

  const loginResponse = await user.login(email);

  console.log('router test');
  console.log(loginResponse);

  if (typeof loginResponse[0].id === 'number') {
    console.log(loginResponse[0].user_name);
    res.json({
      userId: loginResponse[0].user_id,
      userName: loginResponse[0].user_name,
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