import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function HeroSlider() {
  return (
    <>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fs-1">Full Enjoy Your Stay With US</h5>
        <p className="fs-5 ">Primis hac auctor curabitur consequat sociosqu massa rutrum nascetur condimentum interdum ex.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5  className="fs-1">Enjoy A Luxury Experience</h5>
        <p  className="fs-5">Primis hac auctor curabitur consequat sociosqu massa rutrum nascetur condimentum interdum ex.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 className="fs-1">Make Your Stay Memorable</h5>
        <p className="fs-5">Primis hac auctor curabitur consequat sociosqu massa rutrum nascetur condimentum interdum ex.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
}

export default HeroSlider;
