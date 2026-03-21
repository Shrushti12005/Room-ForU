import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/property/${id}`);
        setRoom(res.data.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load room");
      }
    };

    fetchRoom();
  }, [id]);

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        "http://localhost:5000/booking",
        {
          propertyId: id,
          name,
          checkIn,
          checkOut
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Booking Confirmed..");
      navigate("/my-bookings");

    } catch (err) {
      console.log(err);
      toast.error("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (!room) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${room.images?.[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: 1
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            width: "90%",
            padding: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
        >
          <h2 className="mb-3 text-center">
            Booking: {room.title}
          </h2>

          <input style={{"border":" 2px solid #ccc","padding":" 8px","border-radius": "4px" ,"outline": "none",  "transition: border":"0.3s", "box-shadow ":"0.3s", "border-color": "green", "box-shadow": "0 0 5px green"}}
            type="text"
            placeholder="Your Name"
            className="form-control mb-3 "
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input style={{"border":" 2px solid #ccc","padding": "8px","border-radius": "4px" ,"outline": "none",  "transition: border":"0.3s", "box-shadow ":"0.3s", "border-color": "green", "box-shadow": "0 0 5px green"}}
            type="date"
            className="form-control mb-3"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <input style={{"border":" 2px solid #ccc","padding": "8px","border-radius": "4px" ,"outline": "none",  "transition: border":"0.3s", "box-shadow ":"0.3s", "border-color": "green", "box-shadow": "0 0 5px green"}}
            type="date"
            className="form-control mb-3"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />

          <button
            className="btn w-100"
            type="submit"
            disabled={loading}
            style={{ backgroundColor: "#0d5c4d", color: "white" }}
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default BookingPage;