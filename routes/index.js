const express = require('express');
const Movie = require('../models/Movie.model') 
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allMovies) => {
        // res.send(allMovies)
        console.log(allMovies)
        res.render('movies', {
            movies:allMovies
        })
    })
    .catch(err => {
        console.log('ERROR while finding MOVIES data', err);
        next(err);
    })
});

module.exports = router;
