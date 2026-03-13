import dotenv from "dotenv";
import User from "../models/Users.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
dotenv.config();
const postRegister=async (req, res) => {
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
}

const postLogin=async (req,res)=>{
  try{

    const {email,password} = req.body;
    if(!email || !password){
      return res.json({
        message:"Email and password required"
      });
    }
    const user = await User.findOne({email});

    if(!user){
      return res.json({
        message:"User not found",
        data:null
      });
    }
    const isPassCorrect = await bcrypt.compare(password,user.password);

    if(!isPassCorrect){
      return res.json({
        message:"Invalid password",
        data:null
      });
    }

    const token = jwt.sign(
      {id:user._id, role:user.role},
      "secretkey",
      {expiresIn:"7d"}
    );

    res.json({
      message:"Login successful",
      token,
      data:{
        id:user._id,
        name:user.name,
        email:user.email,
        role:user.role
      }
    });

  }catch(error){
    res.json({
      message:"Server error",
      error:error.message
    });
  }
}
export {postRegister, postLogin}