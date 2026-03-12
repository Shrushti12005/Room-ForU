import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

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

app.post("/register", (req, res) => {
  const { name, email, password, phone, role } = req.body;
  if (!name || !email || !password){
    return res.json({
      data:null,
       message:"All required fields must be filled"
    })
  }
});
app.listen(PORT, () => {
  console.log("Server running on port 5000");
  connectDB();
});