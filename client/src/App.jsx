import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './Companents/Navbar';
import Footer from './Companents/Footer';
import Home from "./Pages/Home";
import Rooms from "./Pages/Room";
import RoomDetail from "./Pages/RoomDetail";
import Login from "./Pages/Login";
import Slider from "./Pages/Slider";
import Register from "./Pages/Register";
import About from './Pages/About';
import Contacts from './Pages/contacts';
import Bookings from './Pages/Bookings';
function App() {
  return (
    
    <>
    <Router>
             <Navbar></Navbar>
             
      <Routes>
    

 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Slider></Slider>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/room" element={<Rooms></Rooms>}></Route>
        <Route path="/roomdetail" element={<RoomDetail></RoomDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contacts" element={<Contacts></Contacts>}></Route>

        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route path="/bookings" element={<Bookings></Bookings>}></Route>
        <Route path="/roomsdetail" element={<RoomDetail></RoomDetail>}></Route>

        
      </Routes>
          <Footer></Footer>
    </Router>
    </>
  )
}

export default App;