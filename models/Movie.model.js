const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const movieSchema = new Schema( //création d'un Schema=model appelé movieSchema = architecture
  {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showTimes: [String],
  },
  {
    timestamps: true,
  }
);

const movieModel = model("Movie", movieSchema); //j'imprime mon model qui s'appelera Movie dans index.js

module.exports = movieModel;
