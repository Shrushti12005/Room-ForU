import React from "react";
import { useNavigate } from "react-router-dom";

const roomsData = [
  { id: 1, name: "Deluxe Room", price: 2500, img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a" },
  { id: 2, name: "Luxury Suite", price: 5000, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { id: 3, name: "Single Room", price: 1500, img: "https://images.unsplash.com/photo-1590490360182-c33d57733427" },
  { id: 4, name: "Family Room", price: 3500, img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461" },
  { id: 5, name: "Executive Room", price: 4000, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" },
  { id: 6, name: "Presidential Suite", price: 8000, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { id: 7, name: "Studio Room", price: 2200, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrFZSVBtc2HX4t6Y14zvw4nXWBl8TE9gVX6g&s" },
  { id: 8, name: "Queen Room", price: 2700, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { id: 9, name: "King Room", price: 3200, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
  { id: 10, name: "Budget Room", price: 1200, img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c" },
  { id: 11, name: "Honeymoon Suite", price: 6000, img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
  { id: 12, name: "Twin Room", price: 2000, img: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4" },
  { id: 13, name: "Garden View Room", price: 2800, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
  { id: 14, name: "Sea View Room", price: 4500, img: "https://media.istockphoto.com/id/2187865855/photo/modern-style-comfortable-white-living-room-with-open-the-door-to-see-the-sea-view-3d-render.jpg?s=612x612&w=0&k=20&c=lYw98x7RDCYfPfuEIzdY1fudwTsgLmwJTbBVIm-NepM=" },
  { id: 15, name: "Penthouse Suite", price: 10000, img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
  { id: 16, name: "Office+Bedroom Room", price: 4500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Kr87Ms_n5ooG8u0kGKBFn4UymeNQjPNp-g&s" },

];

function RoomsPage() {
  const navigate = useNavigate();

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Rooms</h2>

      <div className="row g-4">
        {roomsData.map((room) => (
          <div className="col-md-4 col-lg-3" key={room.id}>
            <div style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}>
              {/* Image with zoom effect */}
              <div style={{ overflow: "hidden" }}>
                <img
                  src={room.img}
                  alt={room.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    transition: "transform 0.5s ease", // smooth zoom
                    cursor: "pointer"
                  }}
                  onClick={() => navigate(`/book/${room.id}`)}
                  onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                  onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>

              <div style={{ padding: "15px" }}>
                <h5>{room.name}</h5>
                <p>₹{room.price} / night</p>

                <button
                  onClick={() => navigate(`/book/${room.id}`)}
                  style={{
                    backgroundColor: "#0d5c4d",
                    color: "white",
                    border: "none",
                    padding: "8px 15px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsPage;
