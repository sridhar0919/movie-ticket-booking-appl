import React from 'react';
import Navbar from './Navbar';
import homeImage from './images/1640756827751_1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg';
import Footer from './Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Homepage_mobile.css';

export default function Homepage() {
  const navigate = useNavigate();

  const handleMovieClick = (movie1) => {
    axios
      .post('https://movie-ticket-applapi.herokuapp.com/add-movie', {
        movie: movie1,
      })
      .then((res) => {
        console.log(movie1);
        navigate('/movie');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Navbar />
      <div>
        <img src={homeImage} alt="First Image" className="w-100" />
      </div>
      <section className="px-5 py-2">
        <h3 className="mt-5 mb-4 title-top">Recommended movies</h3>
        <div className="d-flex justify-content-around movie-card">
          <div class="card card1">
            <a
              href="/movie"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={(e) => {
                e.preventDefault();
                handleMovieClick('Maanadu');
              }}
            >
              <img
                src={require('./images/movie_poster3.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Maanadu</h5>
                <p class="card-text">Action/Sci-Fi/Thriller</p>
              </div>
            </a>
          </div>
          <div class="card card1">
            <a
              href="/movie"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={(e) => {
                e.preventDefault();
                handleMovieClick('Rocky');
              }}
            >
              <img
                src={require('./images/movie_poster2.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Rocky</h5>
                <p class="card-text">Action/Drama</p>
              </div>
            </a>
          </div>
          <div class="card card1">
            <a
              href="/movie"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={(e) => {
                e.preventDefault();
                handleMovieClick('Pushpa');
              }}
            >
              <img
                src={require('./images/movie_poster4.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Pushpa</h5>
                <p class="card-text">Action/Thriller</p>
              </div>
            </a>
          </div>
          <div class="card card1">
            <a
              href="/movie"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={(e) => {
                e.preventDefault();
                handleMovieClick('83');
              }}
            >
              <img
                src={require('./images/movie_poster5.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">83</h5>
                <p class="card-text">Drama/Sports</p>
              </div>
            </a>
          </div>
          <div class="card card1">
            <a
              href="/movie"
              style={{ textDecoration: 'none', color: 'black' }}
              onClick={(e) => {
                e.preventDefault();
                handleMovieClick('Bachelor');
              }}
            >
              <img
                src={require('./images/movie_poster1.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Bachelor</h5>
                <p class="card-text">Drama/Romantic</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
