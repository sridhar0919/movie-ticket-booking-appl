const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movies: Array,
});

const currentMovieSchema = new mongoose.Schema({
  movie: Array,
});

const movies = mongoose.model('movies', movieSchema);
const current_movie = mongoose.model('current_movie', currentMovieSchema);

module.exports = {
  Movies: movies,
  currentMovie: current_movie,
};
