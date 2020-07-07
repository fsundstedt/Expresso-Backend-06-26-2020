const express = require("express");
const router = express.Router();
const Pull = require("../models/pull.js");

/* Adds new entry */
router.post('/', async (req, res) => {

  const {
    id,
    process,
    brand,
    roast,
    grind,
    grindWeight,
    waterWeight,
    extractionTime,
    rating,
    favorite,
    notes,
    show,
  } = req.body;

  try {
    const response = await Pull.addPull(
        id,
        process,
        brand,
        roast,
        grind,
        grindWeight,
        waterWeight,
        extractionTime,
        rating,
        favorite,
        notes,
        show,
    );

    if (response[0].id >= 1) {
      res.json({ userId: response[0].id }).status(200);
    } else {
      res.send('Could not add new user').status(409);
    }
    res.sendStatus(200);
  } catch (err) {
    return err;
  }
});

module.exports = router;