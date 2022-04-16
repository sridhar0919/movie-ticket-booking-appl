import React, { useState } from 'react';
import './css/Seatbooking.css';
import Footer from './Footer';
import Navbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;

    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

export default function Seatbooking() {
  const navigate = useNavigate();

  const seatsTop = [
    { row: 'A', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'B', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'C', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'D', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'E', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
  ];

  const seatsBottom = [
    { row: 'F', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'G', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'H', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'I', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
    { row: 'J', seat: [1, 2, 3, 4, 5, '', 6, 7, 8, 9, 10, 11, 12] },
  ];
  const [noOfSeats, setNoOfSeats] = useState(-1);
  const [seatNo, setSeatNo] = useState([]);
  const [selected, setSelected] = useState(0);
  const [orderId, setOrderId] = useState(null);

  const handleSeatClick = (row, seat1) => {
    if (noOfSeats === -1) {
      toast.warning('Enter number of seats!!');
    } else if (seatNo.length < noOfSeats && !seatNo.includes(row + seat1)) {
      setSeatNo([...seatNo, row + seat1]);
    } else if (seatNo.length < noOfSeats && seatNo.includes(row + seat1)) {
      setSeatNo((seat) => seat.filter((val) => val !== row + seat1));
    } else if (seatNo.length >= noOfSeats && seatNo.includes(row + seat1)) {
      setSeatNo((seat) => seat.filter((val) => val !== row + seat1));
    } else if (seatNo.length >= noOfSeats && !seatNo.includes(row + seat1)) {
      toast.error('Seat selection limit exceeded!!!');
    }
  };

  const displayRazorPay = async (ticketAmount) => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );
    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    axios
      .post('https://movie-ticket-applapi.herokuapp.com/create/orderId', {
        amount: ticketAmount * 100,
      })
      .then((res) => {
        console.log(res.data.orderId);
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: ticketAmount * 100,
          currency: 'INR',
          name: 'Bookshow',
          description: 'Thank you for using bookshow!',
          image: 'https://example.com/your_logo',
          order_id: res.data.orderId,
          handler: function (response) {
            // alert(`response.razorpay_payment_id`);
            alert('Ticket booked successfully');
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
            navigate('/');
          },
          prefill: {
            name: 'Sridhar',
            email: 'sridhar@example.com',
            contact: '9999999999',
          },
        };
        var paymentObject = new window.Razorpay(options);
        paymentObject.open();
      });
  };

  return (
    <div>
      <ToastContainer />
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <a
            class="navbar-brand"
            style={{ color: 'white', cursor: 'pointer' }}
            onClick={(e) => {
              navigate('/movie');
            }}
          >
            <i class="fas fa-chevron-left pt-2"></i>&nbsp;&nbsp;Back to Movies
          </a>
        </nav>
      </div>
      <div className="main-table">
        <div className="form-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (Number.isInteger(parseInt(e.target[0].value)) == false) {
                toast.warning('Enter valid seat counts!!');
              } else {
                setNoOfSeats(parseInt(e.target[0].value));
              }
            }}
          >
            <h4 className="mb-4">BOOK YOUR TICKETS</h4>
            <div>
              <input
                type="text"
                id="noOfSeats"
                autocomplete="off"
                placeholder="Number of seats"
                className="seat-search"
                required
              />
              <button className="select-seat-btn">Select seats</button>
            </div>
          </form>
        </div>
        {noOfSeats === -1 ? (
          <div></div>
        ) : (
          <div className="seat-select-text">
            <h4>Please select your seats now!</h4>
          </div>
        )}

        <table>
          <tbody>
            {/* Top 5 seats */}
            {seatsTop.map((value, index) => {
              return (
                <tr>
                  <th scope="row" className="seat-letter">
                    {value.row}
                  </th>
                  {value.seat.map((value1, index) => {
                    return (
                      <td key={index}>
                        <a>
                          {value1 !== '' ? (
                            <button
                              class="boxed"
                              style={{
                                backgroundColor: seatNo.includes(
                                  value.row + value1
                                )
                                  ? 'green'
                                  : '',
                              }}
                              onClick={() => handleSeatClick(value.row, value1)}
                            >
                              {value1}
                            </button>
                          ) : (
                            <button className="emp-button"></button>
                          )}
                        </a>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            <tr>
              <td></td>
            </tr>
            {/* Bottom 5 seats */}
            {seatsBottom.map((value, index) => {
              return (
                <tr>
                  <th scope="row" className="seat-letter">
                    {value.row}
                  </th>
                  {value.seat.map((value1, index) => {
                    return (
                      <td key={index}>
                        <a>
                          {value1 !== '' ? (
                            <button
                              class="boxed"
                              onClick={() => handleSeatClick(value.row, value1)}
                            >
                              {value1}
                            </button>
                          ) : (
                            <button className="emp-button"></button>
                          )}
                        </a>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="screen">
        <h1>Screen this way</h1>
      </div>
      {noOfSeats !== -1 && seatNo.length > 0 ? (
        <div className="pop-up">
          <button
            type="submit"
            onClick={() => {
              displayRazorPay(seatNo.length * 150);
            }}
          >
            Pay&nbsp;&nbsp;Rs.{seatNo.length * 150}
          </button>
        </div>
      ) : (
        <div></div>
      )}
      <Footer />
    </div>
  );
}
