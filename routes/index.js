const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie.model.js"); // relier le fichier du model utilisé

/* GET home page */
router.get("/", (req, res, next) => res.render("index", { title: "Cinema Ironhack" }));

router.get("/movies", (req, res, next) => {
  Movie.find({})
    .then((allMoviesFromDB) => {
      console.log(allMoviesFromDB);
      res.render("movies", { movies: allMoviesFromDB });
    })
    .catch((err) => {
      console.log("💥", err);
      next(err);
    });
});

module.exports = router;
