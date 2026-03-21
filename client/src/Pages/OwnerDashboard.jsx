import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function OwnerDashboard() {
  const [properties, setProperties] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchProperties();
    fetchBookings();
  }, []);

  const token = localStorage.getItem("token");

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/my-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

     setProperties(res.data?.properties || []);     

    } catch (err) {
      console.log(err);
      toast.error("Failed to load properties");
    }
  };

  const fetchBookings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/owner-bookings",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

     setBookings(res.data?.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load bookings");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/property/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Property deleted");
      fetchProperties();

    } catch (err) {
      console.log(err);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="container py-5">

      <h2 className="mb-4 text-center">Owner Dashboard</h2>

      <h4>Your Rooms</h4>
      <div className="row g-4 mb-5">

        {properties.map((prop) => (
          <div className="col-md-4" key={prop._id}>
            <div className="card shadow-sm">

              <img
                src={prop.images?.[0]}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{prop.title}</h5>
                <p className="lead mb-1">₹{prop.rent}</p>
                <p className="my-0">{prop.location}</p>
                <p>{prop.description}</p>

                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => handleDelete(prop._id)}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* 🔥 BOOKINGS */}
      <h4>Bookings on Your Rooms</h4>
      <div className="row g-4">

        {bookings?.length === 0 && (
          <p>No bookings yet</p>
        )}

        {bookings?.map((b) => (
          <div className="col-md-4" key={b._id}>

            <div className="card shadow-sm">

              <img
                src={b.property?.images?.[0]}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5>{b.property?.title}</h5>

                <p><strong>Student:</strong> {b.student?.name}</p>
                <p><strong>Email:</strong> {b.student?.email}</p>

                <p><strong>Status:</strong> {b.status}</p>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default OwnerDashboard;