import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/Users.js";
import bcrypt from "bcryptjs"

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

app.post("/register", async (req, res) => {
  try{
  const { name, email, password, phone, role } = req.body;
  if (!name || !email || !password){
    return res.json({
      data:null,
       message:"All required fields must be filled"
    })
 }
    const existingUser=await User.findOne({email});
    if(existingUser){
      return res.json({
        message:"User already exists",
        data:null
      })
    }
    const hashedPass=await bcrypt.hash(password, 10);

    const user=new User({
      name,
      email,
      password:hashedPass,
      phone,
      role
    })
    const savedUser=await user.save();
    return res.json({
      data:savedUser,
      message:"User registered successfully"
    })
 
  }catch(e){
    return res.json({
      message:"error while registering",
      error:e.message,
      data:null
    })
  }
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
  connectDB();
});