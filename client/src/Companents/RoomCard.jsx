import React from "react";
import { Link } from "react-router-dom";

function RoomCard({room}){

return(

<div className="col-md-4">

<div className="card shadow">

<img src={room.image} className="card-img-top"/>

<div className="card-body">

<h5 className="card-title">{room.name}</h5>

<p>₹{room.price} / night</p>

<Link to="/room">

<button className="btn btn-danger">
View Details
</button>

</Link>

</div>

</div>

</div>

)

}

export default RoomCard;
