import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { MapPin } from "lucide-react";

function RoomsPage() {
  const navigate = useNavigate();

  const [roomsData, setRoomsData] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [searchLocation, setSearchLocation] = useState("");
  const [maxRent, setMaxRent] = useState("");

  const [isLocationFocused, setIsLocationFocused] = useState(false);
  const [isRentFocused, setIsRentFocused] = useState(false);

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchLocation, maxRent, roomsData]);

  const fetchRooms = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/properties`);
      setRoomsData(res.data?.data || []);
      setFilteredRooms(res.data?.data || []);
    } catch (err) {
      console.log(err);
      toast.error("Failed to load rooms");
    }
  };

  const applyFilters = () => {
    let updated = [...roomsData];

    if (searchLocation) {
      updated = updated.filter((room) =>
        room.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
    }

    if (maxRent) {
      updated = updated.filter((room) => room.rent <= Number(maxRent));
    }

    setFilteredRooms(updated);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Our Rooms</h2>

      <div className="row mb-4 ">

        <div className="col-md-5 mb-1 ">
          <input
            type="text"
            placeholder="Search by location..."
            className="form-control"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            onFocus={() => setIsLocationFocused(true)}
            onBlur={() => setIsLocationFocused(false)}
            style={{
              border: isLocationFocused
                ? "1px solid #0d5c4d"
                : "1px solid #ced4da",
              outline: "none",
              boxShadow: isLocationFocused
                ? "0 0 0 0.2rem rgba(13, 92, 77, 0.25)"
                : "none",
            }}
          />
        </div>

        <div className="col-md-5 mb-1">
          <input
            type="number"
            placeholder="Max Rent (₹)"
            className="form-control"
            value={maxRent}
            onChange={(e) => setMaxRent(e.target.value)}
            onFocus={() => setIsRentFocused(true)}
            onBlur={() => setIsRentFocused(false)}
            style={{
              border: isRentFocused
                ? "1px solid #0d5c4d"
                : "1px solid #ced4da",
              outline: "none",
              boxShadow: isRentFocused
                ? "0 0 0 0.2rem rgba(13, 92, 77, 0.25)"
                : "none",
            }}
          />
        </div>

        <div className="col-md-2 mb-1">
          <button
            className="btn btn-success w-100"
            onClick={() => {
              setSearchLocation("");
              setMaxRent("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="row g-4">
        {filteredRooms.length === 0 ? (
          <p className="text-center">No rooms found</p>
        ) : (
          filteredRooms.map((room) => (
            <div className="col-md-4 col-lg-3" key={room._id}>
              <div
                style={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
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
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/view/${room._id}`)}
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

                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <MapPin size={16} color="#0d5c4d" />
                    {room.location}
                  </p>

                  <p>₹{room.rent} / month</p>

                  <div style={{ display: "flex", gap: "10px" }}>
                    <button
                      onClick={() => navigate(`/view/${room._id}`)}
                      style={{
                        border: "1px solid #0d5c4d",
                        color: "#0d5c4d",
                        padding: "8px 15px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        background: "transparent",
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
                        cursor: "pointer",
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default RoomsPage;