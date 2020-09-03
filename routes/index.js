const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', (req, res, next) => {
	Movie.find({})
	.then((allMoviesFromDb) => {
		//
		res.render('movies', {
			movieslist: allMoviesFromDb
		})
	})
	.catch(err => {
		console.log('💥', err);
		next(err);
	})
})

/* GET movie details by id page */
router.get('/movies/:id', (req, res, next) => {
	// const { id } = req.params;
	const id = req.params.id //"5f515c04eedfa13390281486"

	Movie.findById(id)
	.then((movieDetails) => {
		console.log(movieDetails);
		//
		res.render('movie-details', {
			details: movieDetails
		})
	})
	.catch(err => {
		console.log('boom', err);
		next(err);
	})
})

module.exports = router;