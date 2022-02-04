import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Navbar() {
  const [movie, setMovie] = useState('');
  const navigate = useNavigate();
  const handleMovieClick = () => {
    axios
      .post('http://localhost:4000/add-movie', {
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
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" style={{ color: 'white' }} href="/">
          Bookshow
        </a>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            value={movie}
            onChange={(e) => {
              setMovie(e.target.value);
            }}
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            class="btn btn-outline-success my-2 my-sm-0"
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
