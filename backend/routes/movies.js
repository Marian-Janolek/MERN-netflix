const router = require('express').Router();
const Movie = require('../models/Movie');
const verify = require('../verifyToken');

// create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new Movie(req.body);
    try {
      const savedMovie = await newMovie.save();
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json('You are not allowed to add movie!');
  }
});
module.exports = router;
