import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

function AdminDashboard() {

  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); 

  useEffect(() => {
    fetchProperties();
  }, []);

  const fetchProperties = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/admin/properties",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setProperties(res.data.data || []);

    } catch (err) {
      console.log(err);
      toast.error("Failed to load properties");
    }
  };

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:5000/approve/${id}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      toast.success("Rooms Approved", {id: "approve-success"});
      fetchProperties();

    } catch (err) {
      toast.error("Approve failed", {id: "approve-error"});
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/property/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Room Deleted", { id: "delete-success" });
      fetchProperties();

    } catch (err) {
      toast.error("Delete failed", { id: "delete-error" });
    }
  };

  return (
    <div className="container py-5">

      <h2 className="text-center mb-4">Admin Dashboard</h2>

      <div className="row g-4">

        {properties.map((prop) => (
          <div className="col-md-4" key={prop._id}>
            <div className="card shadow-sm">

              <img
                src={prop.images?.[0]}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

             <div className="card-body">
  <h5>{prop.title}</h5>
  <p>₹{prop.rent}</p>
  <p>{prop.location}</p>

  {/* ✅ STATUS */}
  <p>
    Status:{" "}
    <span
      style={{
        color: prop.status === "approved" ? "green" : "orange",
        fontWeight: "bold"
      }}
    >
      {prop.status}
    </span>
  </p>

  <div className="d-flex gap-2">

    {/* VIEW */}
    <button
      className="btn btn-outline-dark btn-sm"
      onClick={() => navigate(`/room/${prop._id}`)} // ✅ FIXED
    >
      View
    </button>

    {/* APPROVE */}
    <button
      className="btn btn-success btn-sm"
      disabled={prop.status === "approved"}
      style={{
        opacity: prop.status === "approved" ? 0.6 : 1,
        cursor: prop.status === "approved" ? "not-allowed" : "pointer"
      }}
      onClick={() => handleApprove(prop._id)}
    >
      {prop.status === "approved" ? "Approved" : "Approve"}
    </button>

    {/* REJECT */}
    <button
      className="btn btn-danger btn-sm"
      onClick={() => handleDelete(prop._id)}
    >
      Reject
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

export default AdminDashboard;