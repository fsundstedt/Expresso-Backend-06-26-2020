const express = require("express");
const router = express.Router();

const landingModel = require("../models/landing");

router.get('/', async (req, res) => {

  const list = new landingModel();

  const listResponse = await list.showAll();

  if (typeof listResponse[0].id === 'number') {
    res.json( listResponse ).status(200);
  } else {
    res.json({ userId: null }).status(401);
  }
});

module.exports = router;