import dotenv from "dotenv"
import Property from "../models/Property.js";
dotenv.config();

const addProperty=async (req, res)=>{
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
}

const getAllProperties= async (req, res)=>{
             try {

    const properties = await Property.find({ status: "approved" })
      .populate("owner", "name email");

    res.json({
      message: "Properties fetched successfully",
      data: properties
    });

  } catch (error) {

    res.json({
      message: "Server error",
      error: error.message
    });

  }
}

export {addProperty, getAllProperties};