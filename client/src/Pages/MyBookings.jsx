import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        "http://localhost:5000/my-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setBookings(res.data.data);

    } catch (err) {
      console.log(err);
      toast.error("Failed to load bookings");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">My Bookings</h2>

      <div className="row g-4">

        {bookings.length === 0 && (
          <p className="text-center">No bookings yet</p>
        )}

        {bookings.map((booking) => (
          <div className="col-md-4" key={booking._id}>

            <div className="card shadow-sm">

              {/* Image */}
              <img
                src={booking.property?.images?.[0]}
                alt={booking.property?.title}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{booking.property?.title}</h5>

                <p className="mb-1">
                  <strong>Rent:</strong> ₹{booking.property?.rent}
                </p>

                <p className="mb-1">
                  <strong>Location:</strong> {booking.property?.location}
                </p>

                <p className="mb-1">
                  <strong>Name:</strong> {booking.name}
                </p>

                <p className="mb-1">
                  <strong>Check-In:</strong> {booking.checkIn?.slice(0, 10)}
                </p>

                <p>
                  <strong>Check-Out:</strong> {booking.checkOut?.slice(0, 10)}
                </p>

                <span className="badge bg-success py-2 px-3">
                  Booked
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MyBookings;