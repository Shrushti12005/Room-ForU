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

const getMyBookings=async (req, res) => {
  try {

    const bookings = await Booking.find({ student: req.user.id })
      .populate("property");

    res.json({
      message: "Bookings fetched",
      data: bookings,
    });

  } catch (e) {
    res.json({ message: e.message });
  }
};
export {postBooking, getMyBookings};