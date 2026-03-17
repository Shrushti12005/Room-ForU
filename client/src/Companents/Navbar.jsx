import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand fst-italic fs-2" to="/" style={{"color":"#089295",}}>RoomForU</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
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
              <li className="nav-item">
                <NavLink className="nav-link fs-5 m-2" to="/roomsdetail">
                  RoomsDetails
                </NavLink>
              </li>
               <li className="nav-item">
                <NavLink className="nav-link fs-5 m-2" to="/bookings">
                  Bookings
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 m-2" to="/login">
                  Login
                </NavLink>
              </li>
              
             
            </ul>

            <form className="d-flex" role="search">
            
              <button className="btn btn-outline-success" type="submit">
                BookNow
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>


  )
}

export default Navbar;