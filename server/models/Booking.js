import { Schema, model } from "mongoose";
import Property from "./Property";
import User from "./Users";

const bookingSchema=new Schema({
 property:{
    type:Schema.Types.ObjectId,
    ref:"Property",
     required:true},
     student:{
        type:Schema.Types.ObjectId,
        ref:"Users",
        required:true
     },
     status:{
        type:String,
        enum:["pending","confirmed","cancelled"],
        default:pending
     },
     paymentStatus:{
        type:String,
    enum:["pending","paid"],
    default:"pending"
     }
})

const Booking=model("Booking", bookingSchema);
export default Booking;