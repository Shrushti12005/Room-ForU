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

  const handleCancel = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:5000/cancel-booking/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Booking cancelled");

      fetchBookings(); 

    } catch (err) {
      console.log(err);
      toast.error("Cancel failed");
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

            <div className="card shadow-sm h-100">

              <img
                src={
                  booking.property?.images?.[0] ||
                  "https://via.placeholder.com/300"
                }
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
                  <strong>Check-In:</strong>{" "}
                  {booking.checkIn?.slice(0, 10)}
                </p>

                <p className="mb-1">
                  <strong>Check-Out:</strong>{" "}
                  {booking.checkOut?.slice(0, 10)}
                </p>

                <span
                  className={`badge p-2 mt-3 ${
                    booking.status === "pending"
                      ? "bg-warning"
                      : booking.status === "confirmed"
                      ? "bg-success"
                      : "bg-danger"
                  }`}
                >
                  {booking.status}
                </span>
                {booking.status !== "cancelled" && (
                  <button
                    className="btn btn-danger btn-sm mt-3 w-100 "
                    onClick={() => handleCancel(booking._id)}
                  >
                    Cancel Booking
                  </button>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default MyBookings;