import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Companents/Navbar';
import Footer from './Companents/Footer';
import Home from "./Pages/Home";
import Rooms from "./Pages/Room";
import RoomDetails from "./Pages/RoomDetail";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Bookings from './Pages/Bookings';


function App() {
  return (
    
    <>
    <Router>
             <Navbar></Navbar>
      <Routes>
 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route path="/bookings" element={<Bookings></Bookings>}></Route>
        <Route path="/roomsdetail" element={<RoomDetails></RoomDetails>}></Route>
        
    
      </Routes>
          <Footer></Footer>
    </Router>
    </>
  )
}

export default App;