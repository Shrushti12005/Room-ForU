import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { postRegister, postLogin } from "./controllers/Auth.js";
import Property from "./models/Property.js";
import authMiddleware from "./middleware/authMiddleware.js";

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
app.post("/Property",authMiddleware, async (req, res)=>{
  try{

    const {title,location,rent,description} = req.body;

    const property = new Property({
      title,
      location,
      rent,
      description,
      owner:req.user.id
    });

    await property.save();

    res.json({
      message:"Property added successfully",
      data:property
    });

  }catch(e){

    res.json({
      message:"Server error",
      error:e.message
    });

  }
})

app.listen(PORT, () => {
  console.log("Server running on port 5000");
  connectDB();
});