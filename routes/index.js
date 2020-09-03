const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
    
    Movie.find({})
    .then((allMoviesFromDb) => {
        console.log(allMoviesFromDb)
      //
      res.render('movies', {
        movies: allMoviesFromDb
      })
    })
    .catch(err => {
      console.log('err', err)
      next(err);
   })
})




module.exports = router;
