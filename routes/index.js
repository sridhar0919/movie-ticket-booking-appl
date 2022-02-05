var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const { Movies } = require('./movie');
const { currentMovie } = require('./movie');
var dotenv = require('dotenv');
dotenv.config();
const movie = require('./movie');

mongoose.connect(process.env.MONGOURL);

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Get response
router.get('/get-res', (req, res) => {
  res.send({
    message: 'Got response',
  });
});

// Post movies
router.post('/post-movies', async (req, res) => {
  const movies = new Movies({ movies: req.body });
  await movies.save();
  res.send({
    message: 'Movie added successfully',
  });
});

// Current movie
router.post('/add-movie', async (req, res) => {
  const content = await currentMovie.find();
  const entered_movie =
    req.body.movie.charAt(0).toUpperCase() +
    req.body.movie.slice(1).toLowerCase();
  if (content.length === 0) {
    const total_movies = await Movies.find();
    const current_movie = new currentMovie({ movie: null });
    total_movies[0].movies.map(async (value) => {
      if (value.movie_name === entered_movie) {
        current_movie.movie = value;
        await current_movie.save();
      }
    });
    if (current_movie.movie == null) {
      res.send({
        message: 'Movie not found',
      });
    }
    res.send({
      message: 'New movie selected',
    });
  } else {
    await currentMovie.deleteMany({});
    const total_movies = await Movies.find();
    const current_movie = new currentMovie({ movie: null });
    total_movies[0].movies.map(async (value) => {
      if (value.movie_name === entered_movie) {
        current_movie.movie = value;
        await current_movie.save();
      }
    });
    if (current_movie.movie == null) {
      res.send({
        message: 'Movie not found',
      });
    }
    res.send({
      message: 'Movie selected',
    });
  }
});

// Get current movie
router.get('/get-movie', async (req, res) => {
  const movie = await currentMovie.find();
  if (movie.length === 0) {
    res.send({
      message: 'Movie not found',
    });
  }
  res.send({
    data: movie[0].movie,
    message: 'Movie found',
  });
});

module.exports = router;
