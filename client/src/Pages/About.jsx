import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <div className="bg-light text-dark">

      {/* HERO SECTION */}
      <section
  className="text-white py-5 text-center"
  style={{
    backgroundImage: "url('public/rooms.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }}
>
  {/* Overlay */}
  <div
    style={{
      backgroundColor: "rgba(0,0,0,0.6)",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
  ></div>

  <div className="container position-relative">
    <h1 className="display-5 fw-bold">RoomForU</h1>
    <p className="mt-3 mx-auto" style={{ maxWidth: "600px" }}>
      A secure, verified platform designed to simplify student housing
      with trusted listings, easy booking, and transparent reviews.
    </p>
  </div>
</section>
      {/* PROBLEM & SOLUTION */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-6">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h2 className="text-danger fw-bold mb-3">Problem</h2>
                  <ul className="text-muted">
                    <li>Unverified and fake listings</li>
                    <li>Dependence on brokers</li>
                    <li>No secure booking system</li>
                    <li>Lack of reviews & transparency</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h2 className="text-success fw-bold mb-3">Solution</h2>
                  <ul className="text-muted">
                    <li>Verified property listings</li>
                    <li>Role-based dashboards</li>
                    <li>Secure token-based booking</li>
                    <li>Student review system</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">How It Works</h2>

          <div className="row g-4">

            <div className="col-md-3">
              <div className="border rounded p-3 h-100">
                <h5 className="text-success fw-bold">1. Register</h5>
                <p className="text-muted small mt-2">
                  Sign up as Student or Owner
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="border rounded p-3 h-100">
                <h5 className="text-success fw-bold">2. Explore</h5>
                <p className="text-muted small mt-2">
                  Browse and filter available rooms
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="border rounded p-3 h-100">
                <h5 className="text-success fw-bold">3. Book</h5>
                <p className="text-muted small mt-2">
                  Send booking request & pay token
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="border rounded p-3 h-100">
                <h5 className="text-success fw-bold">4. Confirm</h5>
                <p className="text-muted small mt-2">
                  Owner approves your booking
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="fw-bold text-center mb-5">Key Features</h2>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                    Authentication 
                  </h5>
                  <p className="text-muted mt-2">
                    Secure login system with protected routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                    Role-Based Access
                  </h5>
                  <p className="text-muted mt-2">
                    Separate dashboards for students and owners.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                    Booking System
                  </h5>
                  <p className="text-muted mt-2">
                    Request-based booking with status tracking.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                    User Friendly Interface
                  </h5>
                  <p className="text-muted mt-2">
                    Clean UI , Responsive design and Easy navigation
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                   Image Upload & Storage
                  </h5>
                  <p className="text-muted mt-2">
                    Cloud storage (Cloudinary)
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h5 className="text-success fw-semibold">
                    Search & Filter
                  </h5>
                  <p className="text-muted mt-2">
                    Filter rooms by budget, location, and type.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-5 bg-white text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Team</h2>
<div className="d-flex justify-content-center flex-wrap gap-4">

  <div className="text-center">
    <img
      src="/public/siddhi.jpeg"
      alt="Siddhi Kharde"
      className="rounded-circle mb-2"
      width="120"
      height="120"
      style={{ objectFit: "cover" }}
    />
    <h5 className="fw-semibold">Siddhi Kharde</h5>
    
  </div>

  <div className="text-center">
    <img
      src="/public/gayatri.jpeg"
      alt="Gayatri Devadhe"
      className="rounded-circle mb-2"
      width="120"
      height="120"
      style={{ objectFit: "cover" }}
    />
    <h5 className="fw-semibold">Gayatri Devadhe</h5>
    
  </div>

  <div className="text-center">
    <img
      src="/public/shrushti.jpeg"
      alt="Shrushti Dhokchaule"
      className="rounded-circle mb-2"
      width="120"
      height="120"
      style={{ objectFit: "cover" }}
    />
    <h5 className="fw-semibold">Shrushti Dhokchaule</h5>
    
  </div>

</div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-success text-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">
            Start Finding Your Perfect Room Today
          </h2>
        <button
  className="btn btn-light text-success fw-semibold me-2"
  onClick={() => navigate("/rooms")}
>
  Explore Rooms
</button>
        </div>
      </section>

    </div>
  );
}

export default About;