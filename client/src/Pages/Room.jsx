import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function RoomsPage() {
  const navigate = useNavigate();
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/properties");
      setRoomsData(res.data?.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load rooms");
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Rooms</h2>

      <div className="row g-4">
        {roomsData.map((room) => (
          <div className="col-md-4 col-lg-3" key={room._id}>
            <div
              style={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <img
                  src={room.images?.[0] || "https://via.placeholder.com/300"}
                  alt={room.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                    cursor: "pointer"
                  }}
                  onClick={() => navigate(`/book/${room._id}`)}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.1)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              </div>

              <div style={{ padding: "15px" }}>
                <h5>{room.title}</h5>
                <p>₹{room.rent} / month</p>

                <div style={{ display: "flex", gap: "10px" }}>
                  <button
                    onClick={() => navigate(`/view/${room._id}`)}
                    style={{
                      border: "1px solid #0d5c4d",
                      color: "#0d5c4d",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    View
                  </button>

                  <button
                    onClick={() => navigate(`/book/${room._id}`)}
                    style={{
                      backgroundColor: "#0d5c4d",
                      color: "white",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Book
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsPage;