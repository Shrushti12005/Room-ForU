import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function OwnerDashboard() {
    const [properties, setProperties] = useState([]);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetchProperties();
        fetchBookings();
    }, []);

    const token = localStorage.getItem("token");

    const fetchProperties = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/my-properties",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setProperties(res.data?.properties || []);

        } catch (err) {
            console.log(err);
            toast.error("Failed to load properties");
        }
    };

    const fetchBookings = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/owner-bookings",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            setBookings(res.data?.data || []);
        } catch (err) {
            console.log(err);
            toast.error("Failed to load bookings");
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

            toast.success("Property deleted");
            fetchProperties();

        } catch (err) {
            console.log(err);
            toast.error("Delete failed");
        }
    };

    return (
        <div className="container mt-4 py-5 px-3" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>

            <h2 className="mb-4 text-center">Owner Dashboard</h2>

            <h4 style={{ color: "#0d5c4d", fontWeight: "600" }}>Your Rooms</h4>
            <div className="row g-4 mb-5">

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
                                <p className="lead mb-1">₹{prop.rent}</p>
                                <p className="my-0">{prop.location}</p>
                                <p>{prop.description}</p>

                                <button
                                    className="btn btn-sm w-100"
                                    style={{
                                        backgroundColor: "#dc3545",
                                        color: "white",
                                        borderRadius: "6px"
                                    }}
                                >
                                    Delete
                                </button>
                            </div>

                        </div>
                    </div>
                ))}

            </div>
<hr className="my-5" />
            <h4 style={{ color: "#0d5c4d", fontWeight: "600" }}>
                Bookings on Your Rooms
            </h4>
            <div className="row g-4">

                {bookings?.length === 0 && (
                    <p>No bookings yet</p>
                )}

                {bookings?.map((b) => (
                    <div className="col-md-4" key={b._id}>

                        <div className="card shadow-sm border-0" style={{ borderRadius: "12px" }}>
                            <img
                                src={b.property?.images?.[0]}
                                className="card-img-top"
                                style={{ height: "200px", objectFit: "cover" }}
                            />

                            <div className="card-body">
                                <h5>{b.property?.title}</h5>

                                <span
                                    className={`badge ${b.status === "pending"
                                        ? "bg-warning"
                                        : b.status === "confirmed"
                                            ? "bg-success"
                                            : "bg-danger"
                                        }`}
                                >
                                    {b.status}
                                </span>
                                <p><strong>Email:</strong> {b.student?.email}</p>

                                <p><strong>Status:</strong> {b.status}</p>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default OwnerDashboard;