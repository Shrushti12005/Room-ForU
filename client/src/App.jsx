import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Companents/ProtectedRoute";
import { Toaster } from 'react-hot-toast';
import Navbar from './Companents/Navbar';
import Footer from './Companents/Footer';
import Home from "./Pages/Home";
import Rooms from "./Pages/Room";
import RoomsPage from "./Pages/RoomDetail";
import Login from "./Pages/Login";
import Slider from "./Pages/Slider";
import AddRooms from './Pages/AddRooms';
import MyBookings from './Pages/MyBookings';
import About from "./Pages/About";
import Contacts from './Pages/contacts';
import  BookingPage from './Pages/Bookings';

import View from './Pages/View';

import Signup from './Pages/SighnUp';
import OwnerDashboard from './Pages/OwnerDashboard';
import AdminDashboard from './Pages/AdminDashboard';
function App() {
  return (
    
    <>
    <Router>
             <Navbar></Navbar>
             
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Slider></Slider>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contacts" element={<Contacts></Contacts>}></Route>
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
          <Route path="/roomsdetail" element={<RoomsPage></RoomsPage>}></Route>
        <Route path="/view/:id" element={<View />} />
      <Route 
  path="/book/:id" 
  element={
    <ProtectedRoute allowedRoles={["student", "owner", "admin"]}>
      <BookingPage />
    </ProtectedRoute>
  }
/>
      
        <Route 
  path="/my-bookings" 
  element={
    <ProtectedRoute allowedRoles={["student"]}>
      <MyBookings />
    </ProtectedRoute>
  }
/>
       <Route 
  path="/owner-dashboard" 
  element={
    <ProtectedRoute allowedRoles={["owner"]}>
      <OwnerDashboard />
    </ProtectedRoute>
  }
/>

<Route 
  path="/addrooms" 
  element={
    <ProtectedRoute allowedRoles={["owner"]}>
      <AddRooms />
    </ProtectedRoute>
  }
/>
    <Route 
  path="/admin" 
  element={
    <ProtectedRoute allowedRoles={["admin"]}>
      <AdminDashboard />
    </ProtectedRoute>
  }
/>

        
      </Routes>
      <Toaster/>
          <Footer></Footer>
    </Router>
    </>
  )
}

export default App;