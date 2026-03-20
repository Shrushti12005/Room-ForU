import React from 'react'
import { useParams } from "react-router-dom";


function BookingPage() {
  const { id } = useParams();

  return (
    <div className="container py-5">
      <h2>Booking for Room ID: {id}</h2>

      <form style={{ maxWidth: "400px" }}>
        <input type="text" placeholder="Your Name" className="form-control mb-3" />
        <input type="date" className="form-control mb-3" />
        <input type="date" className="form-control mb-3" />

        <button className="btn btn-success">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingPage;

  