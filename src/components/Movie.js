import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import './css/Movie.css';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './images/maanadu/maanadu_poster.jpg';

export default function Movie() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      {/* Movie Title */}
      <div
        className="movie-desc-top"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="px-5 py-3 d-flex movie-detail">
          <div class="card" style={{ width: '220px' }}>
            <img
              src={require('./images/movie_poster3.jpg')}
              class="card-img-top"
              alt="..."
              height="370px"
            />
          </div>
          <div className="ml-3 py-5">
            <h1 className="display-1">Maanadu</h1>
            <p className="mt-3 font-weight-bold">
              2h 27m | Action,Sci-fi,Thriller
            </p>
            <p className="font-weight-bold">UA | 25 Nov,2021</p>
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
      <div className="px-5">
        <div>
          <h3 className="font-weight-bold">About the movie</h3>
          <p className="mt-3">
            On the day of a public conference by the state`s Chief Minister, his
            bodyguard and a police officer get stuck in a time loop.
          </p>
        </div>
        <div className="cast-crew">
          <h3 className="font-weight-bold">Cast & Crew</h3>
          <div className="d-flex mt-4">
            <div class="card" style={{ border: 'none' }}>
              <img
                src={require('./images/maanadu/simbu.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Silambarasan</h5>
              </div>
            </div>
            <div class="card ml-5" style={{ border: 'none' }}>
              <img
                src={require('./images/maanadu/kalyani.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Kalyani</h5>
              </div>
            </div>
            <div class="card ml-5" style={{ border: 'none' }}>
              <img
                src={require('./images/maanadu/sjsurya.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">SJ Surya</h5>
              </div>
            </div>
            <div class="card ml-5" style={{ border: 'none' }}>
              <img
                src={require('./images/maanadu/vp.jpg')}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Venkat Prabhu</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
