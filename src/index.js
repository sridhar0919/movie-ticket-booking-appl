import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/Movie';
import Seatbooking from './components/Seatbooking';
import Payment from './components/Payment';

const routing = (
  <Router>
    <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route exact path="/movie" element={<Movie />} />
      <Route exact path="/book-tickets" element={<Seatbooking />} />
      <Route exact path="/payment" element={<Payment />} />
    </Routes>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
