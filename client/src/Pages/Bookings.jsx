import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔥 Fetch Room Details
  useEffect(() => {
    const fetchRoom = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/property/${id}`
        );
        setRoom(res.data.data);
      } catch (err) {
        console.log(err);
        toast.error("Failed to load room");
      }
    };

    fetchRoom();
  }, [id]);

  // 🔥 Booking Function
  const handleBooking = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      await axios.post(
        `${import.meta.env.VITE_API_URL}/booking`,
        { propertyId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Booking Request Sent");
      navigate("/my-bookings");

    } catch (err) {
      console.log(err);
      toast.error("Booking failed");
    } finally {
      setLoading(false);
    }
  };

  if (!room) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  return (
    <div style={styles.container}>

      {/* Background Image */}
      <div
        style={{
          ...styles.background,
          backgroundImage: `url(${room.images?.[0]})`
        }}
      ></div>

      {/* Content */}
      <div style={styles.overlay}>
        <div style={styles.card}>

          <img
            src={room.images?.[0]}
            alt={room.title}
            style={styles.image}
          />

          <h2 style={{ marginBottom: "10px" }}>{room.title}</h2>

          <p style={styles.location}>📍 {room.location}</p>

          <h4 style={styles.price}>₹{room.rent} / month</h4>

          <p style={styles.desc}>
            {room.description?.slice(0, 120)}...
          </p>

          <div style={styles.actions}>
            <button
              style={styles.cancelBtn}
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>

            <button
              style={styles.confirmBtn}
              onClick={handleBooking}
              disabled={loading}
            >
              {loading ? "Processing..." : "Confirm Booking"}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BookingPage;





// 🎨 Styles
const styles = {
  container: {
    position: "relative",
    minHeight: "100vh"
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "blur(8px)",
    zIndex: 1
  },

  overlay: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)"
  },

  card: {
    width: "90%",
    maxWidth: "420px",
    background: "#fff",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "15px"
  },

  location: {
    color: "#666",
    marginBottom: "5px"
  },

  price: {
    color: "#0d5c4d",
    marginBottom: "10px"
  },

  desc: {
    fontSize: "14px",
    color: "#444",
    marginBottom: "20px"
  },

  actions: {
    display: "flex",
    gap: "10px",
    justifyContent: "center"
  },

  cancelBtn: {
    padding: "10px 20px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    background: "#f5f5f5",
    cursor: "pointer"
  },

  confirmBtn: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    background: "#0d5c4d",
    color: "#fff",
    cursor: "pointer"
  }
};