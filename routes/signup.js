const express = require("express");
const router = express.Router();
const SignUp = require("../models/signup.js");

bcrypt = require("bcrypt");
const saltRounds = 10;

/* Adds new user */
router.post('/', async (req, res) => {

  const {
    username,
    email,
    user_password,
  } = req.body;

  const salt = bcrypt.genSaltSync(saltRounds);
  const hash = bcrypt.hashSync(user_password, salt);

  try {
    const response = await SignUp.addUser(
        username,
        email,
        hash
    );

    if (response[0].id >= 1) {
      console.log('Route response: ' + response[0].id);
      res.json({ userId: response[0].id }).status(200);
    } else {
      console.log('Route response failed: ' + response[0].id);
      res.send('Could not add new user').status(409);
    }
    res.sendStatus(200);
  } catch (err) {
    return err;
  }
});

module.exports = router;