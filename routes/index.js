const express = require('express');
const Movie = require('../models/Movie.model') 
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));
router.get('/movies', (req, res, next) => {
    Movie.find()
    .then((allMovies) => {
        res.render('movies', {
            movies:allMovies
        })
    })
    .catch(err => {
        console.log('ERROR while finding MOVIES data', err);
        next(err);
    })
});

router.get('/movies/:movieid', (req, res, next) => {
    const id = req.params.movieid
    Movie.find({_id:id})
    .then( (allMovies) =>{
        res.render('movies-details', {
            movie:allMovies[0]
        })
    })
    .catch( err => {
        console.log(`ERROR while searching movie id ${id}`, err);
        next(err);
    })
})

module.exports = router;
