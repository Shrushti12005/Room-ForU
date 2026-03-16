import Booking from "../models/Booking.js";

const postBooking=async (req, res)=>{
      try{
         const {propertyId}=req.body;
         const booking= new Booking({
            property:propertyId,
            student:req.user.id
         })

         await booking.save();
         res.json({
            message:"Booking request sent successfully",
           data:booking 
         })

      }catch(e){
        return res.json({
             message:"Server error",
      error:e.message
        })
      }
}

export {postBooking};