const mongoose = require('mongoose');

// destructuring
// const { Schema } = mongoose; // destructuring
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	director: {
		type: String,
	},
	stars: {
		type: [ String ],
	},
	image: {
		type: String,
	},
	description: {
		type: String,
	},
	showtimes: {
		type: [ String ],
	},
	// created_at: 
  // updated_at:
}, {
	timestamps: true
})

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;