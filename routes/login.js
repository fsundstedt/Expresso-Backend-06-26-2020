const express = require("express");
const router = express.Router();

const loginUser = require("../models/login");
bcrypt = require("bcrypt");

router.post("/loginuser", async (req, res) => {
  const { email, user_password } = req.body;

  const user = new loginUser(email, user_password);

  const loginResponse = await user.login(email);

  if (!!loginResponse.isValid) {
    res.json({ userId: loginResponse.user_id }).status(200);
  } else {
    res.json({ userId: null }).status(401);
  }
});

router.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;