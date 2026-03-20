import dotenv from "dotenv";
import Property from "../models/Property.js";

dotenv.config();

const approveProperty = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await Property.findById(id);

    if (!property) {
      return res.status(404).json({
        message: "Property not found",
      });
    }
    property.status = "approved";
    await property.save();

    return res.json({
      message: "Property approved successfully",
      data: property,
    });

  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export { approveProperty };