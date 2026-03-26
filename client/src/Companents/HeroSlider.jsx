import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function HeroSlider() {
  return (
    <div id="carouselExampleDark" className="carousel slide">

      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
      </div>

      <div className="carousel-inner">

        <div className="carousel-item active" data-bs-interval="4000">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              className="d-block w-100"
              style={{ height: "90vh", objectFit: "cover" }}
              alt="Room"
            />

            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
            }}></div>

            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100%" }}>
              <h1 className="fw-bold">Find Your Perfect Room</h1>
              <p className="fs-5">
                Discover comfortable and affordable rooms tailored for students and professionals.
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="4000">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
              className="d-block w-100"
              style={{ height: "90vh", objectFit: "cover" }}
              alt="Luxury Room"
            />

            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
            }}></div>

            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100%" }}>
              <h1 className="fw-bold">Comfort Meets Convenience</h1>
              <p className="fs-5">
                Book verified rooms with modern amenities and enjoy a stress-free living experience.
              </p>
            </div>
          </div>
        </div>

        <div className="carousel-item" data-bs-interval="4000">
          <div style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
              className="d-block w-100"
              style={{ height: "90vh", objectFit: "cover" }}
              alt="Stay"
            />

            <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.5)"
            }}></div>

            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{ height: "100%" }}>
              <h1 className="fw-bold">Simple & Fast Booking</h1>
              <p className="fs-5">
                Choose your room, book instantly, and manage everything in one place.
              </p>
            </div>
          </div>
        </div>

      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
      </button>

    </div>
  );
}

export default HeroSlider;