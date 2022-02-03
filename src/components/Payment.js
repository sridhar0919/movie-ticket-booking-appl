import React from 'react';
import './css/Payment.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';

export default function Payment() {
  return (
    <div>
      <Navbar />
      <div className="main-content">
        <ToastContainer />/
        <form
          className="form-content"
          onSubmit={(e) => {
            e.preventDefault();
            toast.success('Ticket booked successfully');
          }}
        >
          <p>ITS A FAKE PAYMENT PAGE!! JUST FOR DEMO!!! </p>
          <h1>Payment Details</h1>
          <div className="mt-4">
            <label for="fname" className="d-block">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              autoComplete="off"
            />
          </div>
          <div className="mt-4">
            <label for="fname" className="d-block">
              Card Number
            </label>
            <input
              type="text"
              id="card-no"
              name="card-no"
              autoComplete="off"
              placeholder="Enter card number"
            />
          </div>
          <div className="d-flex">
            <div className="mt-4">
              <label for="fname" className="d-block">
                Expiry Date
              </label>
              <input
                type="text"
                id="month"
                name="month"
                placeholder="MM"
                autoComplete="off"
                className="mr-3 expiry"
              />
              <input
                type="text"
                id="year"
                name="year"
                placeholder="YY"
                autoComplete="off"
                className="expiry"
              />
            </div>
            <div className="mt-4 ml-4">
              <label for="fname" className="d-block">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                placeholder="CVV"
                autoComplete="off"
                className="expiry"
              />
            </div>
          </div>
          <div className="d-flex flex-column mt-4">
            <button className="btn btn-primary">Pay</button>
          </div>
        </form>
      </div>
    </div>
  );
}
