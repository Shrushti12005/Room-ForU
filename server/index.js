import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
const PORT=5000;
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
});