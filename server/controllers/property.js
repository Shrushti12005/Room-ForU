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

const searchProperties= async (req, res)=>{
  try {
    const { location, minRent, maxRent } = req.query;
    const filter={status:"approved"};
    if(location){
      filter.location={ $regex: location, $options: "i" };
    }
    if(minRent || maxRent){
      filter.rent={};
      if(minRent){
        filter.rent.$gte=Number(minRent);
      }
      if(maxRent){
        filter.rent.$lte=Number(maxRent);
      }
    }
    const properties = await Property.find(filter);

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

const getOwnerProperties=async (req, res) => {
  try {

    const properties = await Property.find({ owner: req.user.id });

    res.json({
      properties
    });

  } catch (e) {
    res.json({ message: e.message });
  }
};

export {addProperty, getAllProperties, searchProperties, getOwnerProperties};