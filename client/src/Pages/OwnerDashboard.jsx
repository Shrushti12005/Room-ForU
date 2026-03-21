import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function OwnerDashboard() {
    const [properties, setProperties] = useState([]);
    const [bookings, setBookings] = useState([]);

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            toast.error("Please login first");
            return;
        }
        fetchProperties();
        fetchBookings();
    }, []);

    const fetchProperties = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/my-properties",
                {
                    headers: { Authorization: `Bearer ${token}` }
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
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            setBookings(res.data?.data || []);
        } catch (err) {
            console.log(err);
            toast.error("Failed to load bookings");
        }
    };

    // ✅ FIXED
    const updateStatus = async (id, status) => {
        try {
            await axios.put(
                `http://localhost:5000/booking-status/${id}`,
                { status },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            toast.success("Booking updated");
            fetchBookings();

        } catch (err) {
            console.log(err);
            toast.error("Update failed");
        }
    };

    // ✅ FIXED
    const handleDelete = async (id) => {
        try {
            await axios.delete(
                `http://localhost:5000/property/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
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
        <div
            className="container mt-4 py-5 px-3"
            style={{ background: "#f4f7f6", minHeight: "100vh" }}
        >
            <h2 className="mb-5 text-center fw-bold text-dark">
                Owner Dashboard
            </h2>

            {/* 🔹 PROPERTIES */}
            <h4 className="mb-3 fw-semibold" style={{ color: "#0d5c4d" }}>
                Your Rooms
            </h4>

            <div className="row g-4 mb-5">
                {properties.length === 0 && (
                    <p className="text-muted">No properties added yet</p>
                )}
                {properties.map((prop) => (
                    <div className="col-md-4" key={prop._id}>
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ borderRadius: "15px" }}
                        >
                            <img
                                src={prop.images?.[0]}
                                className="card-img-top"
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "15px",
                                    borderTopRightRadius: "15px"
                                }}
                            />

                            <div className="card-body">
                                <h5 className="fw-bold">{prop.title}</h5>

                                <p className="text-success fw-semibold mb-1">
                                    ₹{prop.rent} / month
                                </p>

                                <p className="text-muted mb-1">
                                    📍 {prop.location}
                                </p>

                                <p className="small text-secondary">
                                    {prop.description?.slice(0, 60)}...
                                </p>

                                <button
                                    className="btn w-100 mt-2"
                                    style={{
                                        background: "linear-gradient(45deg,#dc3545,#ff6b6b)",
                                        color: "white",
                                        borderRadius: "8px"
                                    }}
                                    onClick={() => handleDelete(prop._id)}
                                >
                                    Delete Property
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="my-5" />
            <h4 className="mb-3 fw-semibold" style={{ color: "#0d5c4d" }}>
                Bookings on Your Rooms
            </h4>
            <div className="row g-4">
                {bookings.length === 0 && (
                    <p className="text-muted">No bookings yet</p>
                )}

                {bookings.map((b) => (
                    <div className="col-md-4" key={b._id}>
                        <div
                            className="card border-0 shadow-sm h-100"
                            style={{ borderRadius: "15px" }}
                        >
                            <img
                                src={b.property?.images?.[0]}
                                className="card-img-top"
                                style={{
                                    height: "200px",
                                    objectFit: "cover",
                                    borderTopLeftRadius: "15px",
                                    borderTopRightRadius: "15px"
                                }}
                            />

                            <div className="card-body">
                                <h5 className="fw-bold">
                                    {b.property?.title}
                                </h5>

                                <p className="mb-1">
                                    <strong>Email:</strong>{" "}
                                    {b.student?.email}
                                </p>
                                <p>
                                    <strong>Status:</strong>{" "}
                                    <span
                                        className={
                                            b.status === "confirmed"
                                                ? "text-success fw-semibold"
                                                : b.status === "cancelled"
                                                ? "text-danger fw-semibold"
                                                : "text-warning fw-semibold"
                                        }
                                    >
                                        {b.status}
                                    </span>
                                </p>

                                <div className="d-flex gap-2 mt-2">
                                    <button
                                        className="btn btn-success btn-sm w-100"
                                        disabled={b.status === "confirmed"}
                                        onClick={() =>
                                            updateStatus(b._id, "confirmed")
                                        }
                                    >
                                        Approve
                                    </button>

                                    <button
                                        className="btn btn-danger btn-sm w-100"
                                        disabled={b.status === "cancelled"}
                                        onClick={() =>
                                            updateStatus(b._id, "cancelled")
                                        }
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

export default OwnerDashboard;