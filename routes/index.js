const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res) => {
  Movie.find()
  .then((allTheMoviesFromDB) => {
    console.log('Retrieved Movies from DB:', allTheMoviesFromDB);
    res.render('movies', {movies: allTheMoviesFromDB});
  })
  .catch(error => {
    console.log('Error while getting the Movies from the DB: ', error);

    // Call the error-middleware to display the error page to the user
    next(error);
  });
});

router.get('/movies/:id', (req, res) => {
  const { id } = req.params;
 
  Movie.findById(id)
    .then((theMovie) => res.render('movie-details', { movie: theMovie }))
    .catch(error => {
      console.log('Error while retrieving movie details: ', error);
 
      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
