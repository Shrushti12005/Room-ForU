import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRegister, postLogin } from "./controllers/Auth.js";
import { addProperty , deleteProperty, getAllProperties, getOwnerProperties, getSingleProperty, searchProperties} from "./controllers/property.js";
import authMiddleware from "./middleware/authMiddleware.js";
import { getMyBookings, postBooking } from "./controllers/bookingControllers.js";
import { approveProperty } from "./controllers/admin.js";
import upload from "./middleware/upload.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
const PORT=5000;

const connectDB= async()=>{
  const conn=await mongoose.connect(process.env.MONGODB_URI);
  console.log("Mongodb connected...")
}
app.get("/", (req, res) => {
  res.send("RoomForU API Running");
});

app.post("/register", postRegister );
app.post("/login", postLogin);
app.post("/property",authMiddleware, upload.array("images", 5), addProperty )
app.get("/properties", getAllProperties)
app.get("/my-properties", authMiddleware, getOwnerProperties )
app.get("/search", searchProperties)
app.get("/property/:id", getSingleProperty)
app.delete("/property/:id", authMiddleware, deleteProperty)

app.post("/booking", authMiddleware, postBooking )
app.get("/my-bookings", authMiddleware, getMyBookings);

app.put("/approve/:id", authMiddleware, approveProperty);
app.listen(PORT, () => {
  console.log("Server running on port 5000");
  connectDB();
});