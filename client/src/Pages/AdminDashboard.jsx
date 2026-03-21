import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AdminDashboard() {

  const [properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");

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

      await axios.put(
        `http://localhost:5000/approve/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      toast.success("Rooms Approved");
      fetchProperties();

    } catch (err) {
      toast.error("Failed to approve");
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

      toast.success("Room Deleted");
      fetchProperties();

    } catch (err) {
      toast.error("Delete failed");
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

                <p>
                  <strong>Owner:</strong> {prop.owner?.name}
                </p>

                <p>
                  <strong>Status:</strong>{" "}
                  <span style={{
                    color: prop.status === "approved" ? "green" : "orange"
                  }}>
                    {prop.status}
                  </span>
                </p>

                <div className="d-flex gap-2">

                  {prop.status !== "approved" && (
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleApprove(prop._id)}
                    >
                      Approve
                    </button>
                  )}

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(prop._id)}
                  >
                    Delete
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