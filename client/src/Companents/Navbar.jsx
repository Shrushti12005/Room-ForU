import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top shadow-sm">
      <div className="container-fluid">

        <NavLink
          className="navbar-brand fst-italic fs-2"
          to="/"
          style={{ color: "#089295" }}
        >
          RoomForU
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink className="nav-link fs-5 m-2" to="/">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link fs-5 m-2" to="/rooms">
                Rooms
              </NavLink>
            </li>

            {user?.role === "student" && (
              <li className="nav-item">
                <NavLink className="nav-link fs-5 m-2" to="/my-bookings">
                  My Bookings
                </NavLink>
              </li>
            )}

            {user?.role === "owner" && (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link fs-5 m-2" to="/owner-dashboard">
                    Dashboard
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link fs-5 m-2" to="/addRooms">
                    Add Room
                  </NavLink>
                </li>
              </>
            )}

            {user?.role === "admin" && (
              <li className="nav-item">
                <NavLink className="nav-link fs-5 m-2" to="/admin">
                  Admin Panel
                </NavLink>
              </li>
            )}

          </ul>

          <div className="d-flex align-items-center gap-3">

            {user ? (
              <>
                <div
                  style={{
                    width: "35px",
                    height: "35px",
                    borderRadius: "50%",
                    backgroundColor: "#0d5c4d",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold"
                  }}
                >
                  {user.name?.charAt(0).toUpperCase()}
                </div>

                <span className="fw-bold">
                  {user.name}
                </span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  className="btn btn-outline-success"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>

                <button
                  className="btn btn-success"
                  onClick={() => navigate("/signup")}
                >
                  Signup
                </button>
              </>
            )}

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar;