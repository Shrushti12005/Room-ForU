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
<<<<<<< Updated upstream
import Bookings from './Pages/Bookings';


=======
import About from './Pages/About';
import Contacts from './Pages/contacts';
import  BookingPage from './Pages/Bookings';
>>>>>>> Stashed changes
function App() {
  return (
    
    <>
    <Router>
             <Navbar></Navbar>
             
      <Routes>
  
 
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Slider></Slider>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
<<<<<<< Updated upstream
=======
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/roomdetail" element={<RoomDetail></RoomDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contacts" element={<Contacts></Contacts>}></Route>

>>>>>>> Stashed changes
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route path="/book/:id" element={<BookingPage />} />
        <Route path="/roomsdetail" element={<RoomDetail></RoomDetail>}></Route>

        
    
      </Routes>
          <Footer></Footer>
    </Router>
    </>
  )
}

export default App;