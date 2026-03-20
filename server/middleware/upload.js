import multer from "multer";
import pkg from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const CloudinaryStorage =
  pkg.CloudinaryStorage || pkg.default?.CloudinaryStorage;

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "RoomForU",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

export default upload;