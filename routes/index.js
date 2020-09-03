const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allMoviesFromDb) => {
            console.log('toto')
            res.render('movies-list', {
                movies: allMoviesFromDb
            })
        })
        .catch(err => {
            console.log('💥', err)
            next(err); // 
        })
})


module.exports = router;