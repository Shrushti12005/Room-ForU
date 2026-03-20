import React, { useState } from 'react';
import { useParams } from "react-router-dom";

// Rooms data
const roomsData = [
  { id: 1, name: "Deluxe Room", price: 2500, img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a" },
  { id: 2, name: "Luxury Suite", price: 5000, img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b" },
  { id: 3, name: "Single Room", price: 1500, img: "https://images.unsplash.com/photo-1590490360182-c33d57733427" },
  { id: 4, name: "Family Room", price: 3500, img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461" },
  { id: 5, name: "Executive Room", price: 4000, img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa" },
  { id: 6, name: "Presidential Suite", price: 8000, img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" },
  { id: 7, name: "Studio Room", price: 2200, img: "https://images.unsplash.com/photo-1521783988139-893c0b2c5b0b" },
  { id: 8, name: "Queen Room", price: 2700, img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
  { id: 9, name: "King Room", price: 3200, img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb" },
  { id: 10, name: "Budget Room", price: 1200, img: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c" },
  { id: 11, name: "Honeymoon Suite", price: 6000, img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7" },
  { id: 12, name: "Twin Room", price: 2000, img: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4" },
  { id: 13, name: "Garden View Room", price: 2800, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" },
  { id: 14, name: "Sea View Room", price: 4500, img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ec" },
  { id: 15, name: "Penthouse Suite", price: 10000, img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be" },
   { id: 16, name: "Office+Bedroom Room", price: 4500, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Kr87Ms_n5ooG8u0kGKBFn4UymeNQjPNp-g&s" },

];

function BookingPage() {
  const { id } = useParams();
  const room = roomsData.find(r => r.id === parseInt(id));

  const [name, setName] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking Confirmed!\nRoom: ${room?.name}\nName: ${name}\nCheck-In: ${checkIn}\nCheck-Out: ${checkOut}`
    );
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      
      {/* Blurred background image */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${room?.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: 1
        }}
      ></div>

      {/* Form overlay */}
      <div
        style={{
          position: "relative", // above the blurred background
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh"
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            maxWidth: "400px",
            width: "90%",
            padding: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.95)", // fully visible form
            borderRadius: "10px",
            boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
          }}
        >
          <h2 className="mb-3" style={{ textAlign: "center" }}>
            Booking: {room?.name}
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="date"
            className="form-control mb-3"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            required
          />
          <input
            type="date"
            className="form-control mb-3"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            required
          />

          <button
            className="btn btn-success w-100"
            type="submit"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingPage;
