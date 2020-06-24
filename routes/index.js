const express = require("express");
const router = express.Router();

const indexModel = require("../models/indexModel");
bcrypt = require("bcrypt");

router.post("/", async (req, res) => {

  const list = new indexModel();

  const listResponse = await list.showAll();

  if (!!listResponse.isValid) {
    res.json({ userId: listResponse.user_id }).status(200);
  } else {
    res.json({ userId: null }).status(401);
  }
});

module.exports = router;