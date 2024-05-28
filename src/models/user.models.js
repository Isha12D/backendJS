//LEC - 9
import mongoose, {Schema} from "mongoose";
//refer readme for attributes


//used/read -> bcrypt-> used to hash passwords
//commands->npm i bcrypt jsonwebtoken
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true,
    },
    fullname:{
        type: String,
        required: true,
        trim: true,
        index: true
    },
    avatar:{
        type:String, //cloudinary URL
        required:true
    },
    coverImage:{
        type: String,
    },
    watchHistory:[//whenever a user see a video it's video id will be stored in an array
        {
            type: Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true,'Password is required']
    },
    refreshToken:{
        type:String
    }

}, {timestamps: true})

//read->middelware->pre->listen events
userSchema.pre("save", async function(next) {
    //next is used bcoz ye le flag or next function p pass kr

    //if condition is applied bcoz we want the method for pswd change only not when any user just chamge his avatar or name or like that
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
})

//we can make custom methods like
userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}
//something edited in env and env.sample
userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
            fullname: this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            //LESS INFO COMP TO ABV
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}
//access tokens are short lived and refresh tokens are long lived
//something like sometimes we are logged in directly sometimes all process done from starting

export const User = mongoose.model("User", userSchema)