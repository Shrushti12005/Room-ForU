import React from "react";
<<<<<<< Updated upstream
import { Link } from "react-router-dom";

function HotelExperience() {
=======
import { useNavigate } from "react-router-dom";

function HotelExperience() {
  const navigate = useNavigate();

  const handleViewRooms = () => {
    navigate("/rooms"); // redirect to rooms detail page
  };
>>>>>>> Stashed changes

  return (
    

 <div className="container py-5">
  <div className="row align-items-center">
    {/* LEFT IMAGE SECTION */}
        <div className="col-lg-6 position-relative mb-4 mb-lg-0">

          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="room"
            className="img-fluid"
            style={{ borderRadius: "6px" }}
          />

<<<<<<< Updated upstream
          {/* Play Button */}
         <Link to="/roomsdetail">
  <button
    style={{
 position: "absolute",
top: "290px", left: "10px", width: "150px", height: "70px", backgroundColor: "#0d5c4d", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "20px", cursor: "pointer"
    }}
  >
    View Details
  </button>
</Link>
=======
          {/* View Rooms Button (replacing video button) */}
          <button
            onClick={handleViewRooms}
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              padding: "12px 18px",
              backgroundColor: "#0d5c4d",
              borderRadius: "8px",
              color: "white",
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
              fontWeight: "600"
            }}
          >
            View Rooms
          </button>
>>>>>>> Stashed changes

          {/* Small overlapping image */}
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267"
            alt="small room"
            className="img-fluid"
            style={{
              width: "180px",
              position: "absolute",
              bottom: "-30px",
              right: "30px",
              borderRadius: "6px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
            }}
          />

        </div>

        {/* RIGHT TEXT SECTION */}
        <div className="col-lg-6">

          <p style={{letterSpacing:"2px",fontSize:"12px",color:"#555"}}>
            THE CONVENIENT HOTEL
          </p>

          <h2 style={{fontWeight:"700",fontSize:"36px"}}>
            Enjoy unforgettable <br/>
            experiences in our hotels
          </h2>

          <div className="row mt-4">

            <div className="col-md-6">
              <p style={{color:"#666"}}>
                Risus consequat donec vel mi diam lobortis maximus
                laoreet nisi. Fames torquent neque duis pharetra urna.
                Fermentum vitae mus neque metus.
              </p>
            </div>

            <div className="col-md-6">
              <p style={{color:"#666"}}>
                Sapien himenaeos sollicitudin habitant hac lacinia
                ridiculus volutpat nisl nascetur curae ad taciti per
                sapien dolor. Eu posuere congue luctus.
              </p>
            </div>

          </div>

          {/* Reservation */}
          <div className="d-flex align-items-center mt-4">

            <div
              style={{
                width:"50px",
                height:"50px",
                borderRadius:"50%",
                background:"#3f8f84",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                color:"white",
                fontSize:"20px",
                marginRight:"15px"
              }}
            >
              📞
            </div>

            <div>
              <strong>Reservation</strong>
              <div>+6221-2002-2012</div>
            </div>

          </div>

        </div>

      </div>
      </div>

  );
}

export default HotelExperience;
