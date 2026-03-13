import React from 'react'
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
    <div className='container-fluid' style={{"backgroundColor":"#f0efea"}}> 
      <div className="container my-5">
  <div className="row g-4">
    
    {/* Card 1 */}
    <div className="col-12 col-sm-6 col-md-3" >
      <div className="card h-100  p-3 shadow-sm border-0"  style={{"backgroundColor":"#f0efea"}}>
        <NavLink className="card-title fs-5 text-success "><i >RoomForU</i></NavLink>
        <p className="card-text text-success" style={{ textAlign: "justify"}}>“Your perfect stay, just a few clicks away! Search, book, and pay for rooms effortlessly, making every trip comfortable and hassle-free.”</p>
      </div>
    </div>

    {/* Card 2 */}
   <div className="col-12 col-sm-6 col-md-3">
  <div className="card h-100 p-3 shadow-sm border-0" style={{backgroundColor:"#f0efea"}}><br/>
    <NavLink 
      to="/" 
      className={ ({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      } 
    >
       Home
    </NavLink>
    <NavLink 
      to="/rooms" 
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       Rooms
    </NavLink>
    <NavLink 
      to="/room-details" 
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       Room Details
    </NavLink>
    <NavLink 
      to="/bookings" 
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
         Bookings
    </NavLink>
    <NavLink 
      to="/login" 
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       Login
    </NavLink>
  </div>
</div>

    {/* Card 3 */}
    <div className="col-12 col-sm-6 col-md-3">
  <div className="card h-100 p-3 shadow-sm border-0" style={{backgroundColor:"#f0efea"}}><br/>
    <NavLink 
       className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       Secure Payment
    </NavLink>
    <NavLink 
       
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       FAQs
    </NavLink>
    <NavLink 
      
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
      Guest Feedback 
    </NavLink>
    <NavLink 
      
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
        Offers
    </NavLink>
    <NavLink 
       
      className={({ isActive }) => 
        isActive ? "d-block mb-2 text-success" : "d-block mb-2 text-success"
      }
    >
       Privacy Policy
    </NavLink>
  </div>
</div>

    {/* Card 4 */}
     <div className="col-12 col-sm-6 col-md-3">
      <div className="card h-100 p-3 shadow-sm border-0 text-success"  style={{"backgroundColor":"#f0efea"} }>
        <NavLink className="card-title fs-5"> Reach-Us</NavLink><br/>
        <p className="card-title"> Jln Cempaka Wangi No 22, Jakarta - Indonesia<br/>
+6221-2002-2012<br/>
support@yourdomain.tld</p>

        

      </div>
    </div>

  </div>
  <div className='container-fluid p-3 text-center text-success'>
    <div className='row' style={{"backgroundColor":"#f0efea" }}>
      <div className='col-12'>Copyright © 2026 Ophelia, All rights reserved. Present by MoxCreative</div>
    </div>
  </div>
</div>
      </div>

    
    </>
  )
}

export default Footer;