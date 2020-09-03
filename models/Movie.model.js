const mongoose =require('mongoose')

const movieSchema = mongoose.Schema({
    title: String,
        director:  String,
        stars: Array,
        image: String,
        description: String,
        showtimes: Array
})

const movieModel = mongoose.model('Movie',movieSchema)

module.exports = movieModel