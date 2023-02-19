import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './css/Navbar.css';

export default function Navbar() {
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();
  const handleMovieClick = () => {
    axios
      .post('https://movie-ticket-appl.onrender.com/add-movie', {
        movie: movie,
      })
      .then((res) => {
        if (res.data.message === 'Movie not found') {
          toast.error('Movie not found!! Enter movies available');
        } else {
          navigate('/movie');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <ToastContainer />
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" style={{ color: 'white' }} href="/">
          <i className="fas fa-ticket-alt mr-2"></i>Bookshow
        </a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2 home-search"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            type="search"
            placeholder="Enter movies"
            aria-label="Search"
          />
          <button
            className="search-button my-2 my-sm-0"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              handleMovieClick(e);
            }}
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}
