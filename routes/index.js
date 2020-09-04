const express = require('express');
const Movie = require('../Models/Movie.model.js');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((mov) => {
      res.render('movies', {
        movies: mov,
      })
    })
    .catch(err => {
      console.log('💥', err)
      next(err); // 
    })
})


module.exports = router;
