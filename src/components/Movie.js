import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './css/Movie.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Movie() {
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [background, setBackground] = useState(null);

  const getMovie = () => {
    axios
      .get('https://movie-ticket-applapi.herokuapp.com/get-movie')
      .then((res) => {
        setBackground(res.data.data[0].poster_img_url);
        setMovie(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <ToastContainer />
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" style={{ color: 'white' }} href="/">
            <i class="fas fa-chevron-left pt-2"></i>&nbsp;&nbsp;Back to Home
          </a>
        </nav>
      </div>
      {/* Movie Title */}
      {movie && (
        <div>
          {console.log(background)}
          <div className="movie-desc-top">
            <div className="px-5 py-3 d-flex movie-detail">
              <div class="card card1">
                <img
                  src={require(`${movie.thumbnail_img_url}`)}
                  class="card-img-top thumbnail-img"
                  alt="..."
                />
              </div>
              <div className="ml-3 py-5 content-div">
                <h1 className="display-1">{movie.movie_name}</h1>
                <p className="mt-3 font-weight-bold">
                  {movie.movie_duration} | {movie.genre}
                </p>
                <p className="font-weight-bold">
                  {movie.censor} | {movie.release_date}
                </p>
                <button
                  type="button"
                  className="book-button"
                  onClick={(e) => {
                    navigate('/book-tickets');
                  }}
                >
                  Book tickets
                </button>
              </div>
            </div>
          </div>
          {/* Movie crew */}
          <div className="px-5 about-section">
            <div>
              <h3 className="font-weight-bold">About the movie</h3>
              <p className="mt-3">{movie.about_movie}</p>
            </div>
            <div className="cast-crew">
              <h3 className="font-weight-bold">Cast & Crew</h3>
              <div className="d-flex mt-4 cast-section">
                <div class="card" style={{ border: 'none' }}>
                  <img
                    src={require(`${movie.cast_img_urls[0]}`)}
                    class="card-img-top card-img1"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title cast-name1">{movie.cast[0]}</h5>
                  </div>
                </div>
                <div class="card ml-5" style={{ border: 'none' }}>
                  <img
                    src={require(`${movie.cast_img_urls[1]}`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title cast-name">{movie.cast[1]}</h5>
                  </div>
                </div>
                <div class="card ml-5" style={{ border: 'none' }}>
                  <img
                    src={require(`${movie.cast_img_urls[2]}`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title cast-name">{movie.cast[2]}</h5>
                  </div>
                </div>
                <div class="card ml-5" style={{ border: 'none' }}>
                  <img
                    src={require(`${movie.cast_img_urls[3]}`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title cast-name">{movie.cast[3]}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
