import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="bg-light text-dark">

      {/* HERO SECTION */}
      <section className="bg-success text-white py-5 text-center">
        <div className="container">
          <h1 className="display-5 fw-bold">Contact Us</h1>
          <p className="mt-3 mx-auto" style={{ maxWidth: "600px" }}>
            Have questions or need assistance? Reach out to us and we’ll help you find your perfect stay.
          </p>
        </div>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* CONTACT DETAILS */}
            <div className="col-md-5">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h3 className="fw-bold mb-4 text-success">Get In Touch</h3>

                  <p className="text-muted">
                    We are here to assist students and property owners with any queries.
                  </p>

                  <div className="mt-4">
                    <p><strong>Email:</strong> support@roomforu.com</p>
                    <p><strong>Phone:</strong> +91 9876543210</p>
                    <p><strong>Location:</strong> Pune, Maharashtra, India</p>
                  </div>

                  <hr />

                  <h5 className="fw-semibold mt-3">Working Hours</h5>
                  <p className="text-muted mb-1">Mon - Fri: 9 AM - 6 PM</p>
                  <p className="text-muted">Sat: 10 AM - 4 PM</p>
                </div>
              </div>
            </div>

            {/* CONTACT FORM */}
            <div className="col-md-7">
              <div className="card shadow h-100">
                <div className="card-body">
                  <h3 className="fw-bold mb-4 text-success">Send Message</h3>

                  <form>
                    <div className="mb-3">
                      <label className="form-label">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter subject"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control"
                        rows="4"
                        placeholder="Write your message..."
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-success">
                      Send Message
                    </button>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MAP / EXTRA SECTION */}
      <section className="bg-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold mb-4">Our Location</h2>

          <div className="border rounded p-4">
            <div className="mt-4 rounded overflow-hidden">
  <iframe
    title="pune-map"
    src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
    width="100%"
    height="250"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
  ></iframe>
</div>
          </div>
        </div>
      </section>

      {/* CTA */}
     <section
  className="text-white py-5 text-center bg-success"
  style={{
    backgroundImage: "url('/images/room.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative"
  }}
>
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
    <h2 className="fw-bold">
      Find Your Perfect Room Without Hassle
    </h2>

    <p className="mt-2">
      Verified listings • No brokers • Secure booking
    </p>

    <div className="mt-3">
   <button
  className="btn btn-light text-success fw-semibold me-2"
  onClick={() => navigate("/rooms")}
>
  Explore Rooms
</button>

      
    </div>
  </div>
</section>

    </div>
  );
}

export default Contact;