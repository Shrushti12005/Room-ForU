import React from "react";
import { Link } from "react-router-dom";

function RoomDetail(){

return(

<div className="container mt-5">

<img
src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688"
className="img-fluid rounded"
/>

<h2 className="mt-4">Luxury Suite</h2>

<p>Beautiful luxury room with AC, Wifi and breakfast.</p>

<h4>₹2500 / night</h4>

<div className="row mt-4">

<div className="col-md-3">
<input type="date" className="form-control"/>
</div>

<div className="col-md-3">
<input type="date" className="form-control"/>
</div>

<div className="col-md-3">

<Link to="/payment">

<button className="btn btn-danger">
Book Now
</button>

</Link>

</div>

</div>

</div>

)

}

export default RoomDetail;
