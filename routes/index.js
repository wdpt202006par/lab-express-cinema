const express = require('express');
const Movie = require('../Models/Movie.model');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find({})
    .then((allMoviesFromDb) => {
      res.render('movies-list', {
        movies: allMoviesFromDb,
      })
    })
    .catch(err => {
      console.log('💥', err)
      next(err); // 
    })
})

router.get('/movie/:id', (req, res, next) => {
  const id = req.params.movieid 

  Movie.findOne({_id: id})
    .then((movie) => {
      res.render('movie-details', {
        movie: movie,
      })
    })
    .catch(err => {
      console.log('boom', err);
      next(err);
    })
})

module.exports = router;
