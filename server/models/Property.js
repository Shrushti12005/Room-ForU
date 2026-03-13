import { Schema, model } from "mongoose";

const propertySchema=new Schema({
      title:{
    type:String,
    required:true
  },
  location:{
    type:String,
    required:true
  },
  rent:{
    type:Number,
    required:true
  },
  description:{
    type:String
  },
  images:{
    type:[String]
  },
  owner:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  status:{
    type:String,
    enum:["pending","approved"],
    default:"pending"
  }

},{timestamps:true})