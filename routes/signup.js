const express = require("express");
const router = express.Router();
const SignUp = require("../models/signup.js");

//* Adds bcrypt for password encription//
bcrypt = require("bcrypt");
const saltRounds = 10;

/* GET home page. */
router.get("/", function (req, res) {
  res.send("Welcome to API").status(200);
});

/* Adds new user */
router.post("/signup", async (req, res) => {
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

    if (response.command === "INSERT" && response.rowCount >= 1) {
      res.json({ userId: response.id }).status(200);
    } else {
      res.send("Could not add new user").status(409);
    }
    res.sendStatus(200);
  } catch (err) {
    return err;
  }
});

module.exports = router;