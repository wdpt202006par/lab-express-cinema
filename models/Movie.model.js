const mongoose = require('mongoose');

// destructuring
// const { Schema } = mongoose; // destructuring
const Schema = mongoose.Schema;

const movieSchema = new Schema({
	title: String,
	description: String,
	author: String,
	rating: Number,
	// created_at: 
  // updated_at:
}, {
	timestamps: true
})

const movieModel = mongoose.model('movie', movieSchema);

module.exports = movieModel;