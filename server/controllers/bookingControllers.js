import Booking from "../models/Booking.js";

const postBooking = async (req, res) => {
  try {
    const { propertyId, name, checkIn, checkOut } = req.body;
    const booking = new Booking({
      property: propertyId,
      student: req.user.id,
      name,
      checkIn,
      checkOut
    });
    await booking.save();
    res.json({
      message: "Booking request sent successfully",
      data: booking
    })

  } catch (e) {
    return res.json({
      message: "Server error",
      error: e.message
    })
  }
}

const getMyBookings = async (req, res) => {
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
const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.json({
        success: false,
        message: "Booking not found" });
    }

    if (booking.student.toString() !== req.user.id) {
      return res.json({ success: false,
         message: "Not authorized" });
    }

    booking.status = "cancelled";
    await booking.save();

    res.json({
      success: true,
      message: "Booking cancelled successfully",
      data: booking
    });

  } catch (e) {
    res.json({ success: false,
       message: e.message });
  }
};

const getOwnerBookings = async (req, res) => {
  try {

    const bookings = await Booking.find()
      .populate({
        path: "property",
        match: { owner: req.user.id } 
      })
      .populate("student", "name email");

    const filtered = bookings.filter(b => b.property !== null);

    res.json({
      message: "Owner bookings fetched",
      success: true,
      data: filtered
    });

  } catch (e) {
    res.json({ message: e.message });
  }
};

const updateBookingStatus = async (req, res) => {
  try {
    const { status } = req.body; 
    const booking = await Booking.findById(req.params.id)
      .populate("property");

    if (!booking) {
      return res.json({ message: "Booking not found" });
    }

    if (booking.property.owner.toString() !== req.user.id) {
      return res.json({ message: "Not authorized" });
    }

    booking.status = status;
    await booking.save();

    res.json({
      message: "Booking updated",
      data: booking
    });

  } catch (e) {
    res.json({
      message: "Error updating booking",
      error: e.message
    });
  }
};
export { postBooking, getMyBookings, cancelBooking, getOwnerBookings, updateBookingStatus };