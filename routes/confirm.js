const express = require('express');

const Confirm = require('../controllers/confirm');

const router = express.Router();

router.get('/', (req, res) => {
  const fish = new Confirm();
  const fishMan = req.query.fishName;
  res.render('fishBowl', {
    getFish: fish.give(fishMan),
  });
});

module.exports = router;
