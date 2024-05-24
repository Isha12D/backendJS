//used/read -> bcrypt-> used to hash passwords
//commands->npm i bcrypt jsonwebtoken


import mongoose,{Schema} from "mongoose";


//used command -> npm i mongoose-aggregate-paginate-v2
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videoFile: {
    type:String, //cloudinary url
    reqired:true,
   },
   thumbnail:{
    type:String,
    required: true
   },
   title:{
    type:String,
    required:true
   },
   description:{
    type:String,
    required:true
   },
   duration:{
    type:Number,
    required:true
   },
   views:{
    type:Number,
    default: 0
   },
   isPublished:{
    type:Boolean,
    default:true
   },
   owner:{
    type: Schema.Types.ObjectId,
    ref: "User"
   }
},{timestamps:true})

//read-> mongoose->middlewares->plugins
videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)