import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRegister, postLogin } from "./controllers/Auth.js";
import { addProperty , getAllProperties, getOwnerProperties, searchProperties} from "./controllers/property.js";
import authMiddleware from "./middleware/authMiddleware.js";
import { getMyBookings, postBooking } from "./controllers/bookingControllers.js";

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
app.post("/Property",authMiddleware, addProperty )
app.get("/properties", getAllProperties)
app.get("/my-properties", authMiddleware, getOwnerProperties )
app.get("/search", searchProperties)

app.post("/booking", authMiddleware, postBooking )
app.get("/my-bookings", authMiddleware, getMyBookings);
app.listen(PORT, () => {
  console.log("Server running on port 5000");
  connectDB();
});