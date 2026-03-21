import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);

  useEffect(() => {
    fetchRoom();
  }, [id]);

  const fetchRoom = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/property/${id}`);
      setRoom(res.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!room) return <h4 className="text-center mt-5">Loading...</h4>;

  return (
    <div className="container py-5">

      <h2>{room.title}</h2>

      <div className="row my-4">
        {room.images?.map((img, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                height: "250px",
                marginTop: "10px",
                objectFit: "cover"
              }}
            />
          </div>
        ))}
      </div>

      <h5>📍 {room.location}</h5>
      <h5>💰 ₹{room.rent} / month</h5>

      <p style={{ marginTop: "15px" }}>{room.description}</p>

      <div style={{
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px"
      }}>
        <h5>Owner Details</h5>
        <p><strong>Name:</strong> {room.owner?.name}</p>
        <p><strong>Email:</strong> {room.owner?.email}</p>
        <p><strong>Phone:</strong> {room.owner?.phone}</p>
      </div>

      <button
        onClick={() => navigate(`/book/${room._id}`)}
        style={{
          backgroundColor: "#0d5c4d",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "15px"
        }}
      >
        Book Now
      </button>

      <div className="mt-3 d-flex gap-2">
        <a
          href={`tel:${room.owner?.phone}`}
          className="btn btn-outline-dark"
        >
          Call Owner
        </a>

        <a
          href={`https://wa.me/91${room.owner?.phone}`}
          target="_blank"
          rel="noreferrer"
          style={{
            backgroundColor: "#25D366",
            color: "white",
            padding: "8px 15px",
            borderRadius: "5px",
            textDecoration: "none"
          }}
        >
          WhatsApp
        </a>

      </div>
    </div>

  );
}

export default RoomDetail;