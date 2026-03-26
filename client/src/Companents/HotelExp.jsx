import React from "react";
import { useNavigate } from "react-router-dom";
import { PhoneCall } from "lucide-react";
function HotelExperience() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <div className="row align-items-center">

        <div className="col-lg-6 position-relative mb-4 mb-lg-0">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="room"
            className="img-fluid"
            style={{ borderRadius: "8px" }}
          />

          <button
            onClick={() => navigate("/rooms")}
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              padding: "10px 20px",
              backgroundColor: "#0d5c4d",
              borderRadius: "6px",
              border: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
            }}
          >
            View Rooms
          </button>

          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="small room"
            className="img-fluid"
            style={{
              width: "180px",
              position: "absolute",
              bottom: "-30px",
              right: "30px",
              borderRadius: "8px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          />

        </div>

        <div className="col-lg-6">

          <p style={{ letterSpacing: "2px", fontSize: "12px", color: "#555" }}>
            FIND YOUR PERFECT STAY
          </p>

          <h2 style={{ fontWeight: "700", fontSize: "36px" }}>
            Comfortable living made <br />
            simple with RoomForU
          </h2>

          <div className="row mt-4">

            <div className="col-md-6">
              <p style={{ color: "#666" }}>
                Discover verified rooms tailored for students and professionals.
                We ensure safe, affordable, and comfortable living spaces in your preferred locations.
              </p>
            </div>

            <div className="col-md-6">
              <p style={{ color: "#666" }}>
                Easily browse, compare, and book rooms in just a few clicks.
                Manage your bookings and stay stress-free with our simple platform.
              </p>
            </div>

          </div>
          <div className="d-flex align-items-center mt-4">

            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "#0d5c4d",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "20px",
                marginRight: "15px"
              }}
            >
             <PhoneCall size={24} style={{ color: "white" }} />
            </div>

            <div>
              <strong>Need Help?</strong>
              <div>+91 98765 43210</div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default HotelExperience;