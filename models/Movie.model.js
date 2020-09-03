const mongoose = require('mongoose')
const {Schema, model} = mongoose;

const Movie = new Schema(
  {
    title: String,
    director: String,
    stars:[String],
    image:String, 
    description:String,
    showTimes:[String],
  },
  {
    timestamps: true
  }
)

const movieModel = mongoose.model('Movie', Movie);

module.exports = movieModel;