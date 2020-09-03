const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next) => {
    Movie.find({})
        .then((allTheMoviesFromDb) => {
            res.render('movies-list', {
                movies: allTheMoviesFromDb
            })
            console.log(allTheMoviesFromDb)
        })
        .catch(err => {
            console.log('Error', err);
            next(err); // afficher la page d'erreur à l'utilisateur
        });
})


module.exports = router;