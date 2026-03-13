import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config();


const checkJwtToken=(req, res, next)=>{
  const {authorization}=req.headers;
  const token=authorization && authorization.split(" ")[1];
  try{
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode;
    console.log("Decoded JWT:", decode);
    next();
  }catch(e){
    return res.json({
      success:false,
      message:"Invalid token",
      data:null,
    })
  }
}

export default checkJwtToken;