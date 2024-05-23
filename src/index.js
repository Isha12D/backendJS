//METHOD 2  (METHOD 1 BELOW)
//require('dotenv').config({path:'./env'})
// import dotenv from "dotenv"
// // src/index.js
// import { connect, models } from './db/index.js';


// connect();
// console.log(models);


// import connectDB from "./db"

// dotenv.config({
//     path: './env'
// })

// connectDB()


//from chatgpt
// src/index.js

// Import dotenv and configure it first
import dotenv from "dotenv";
dotenv.config({
  path: './env'
});

// Import other modules
import { connect, models } from './db/index.js';
import connectDB from "./db";

// Use the imported modules
connect();
console.log(models);

// Connect to the database
connectDB();





























//***METHOD 1 */
// import express from "express"

// const app = express()
// //always use try catch method and async await method while using DB
// //this semicolon below used by professionals so that if any semicol left in prev line tohandle that

// ;( async () => {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",() =>{
//         console.log("err: ", error);
//         throw error
//        })

//     app.listen(process.env.PORT,() => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//     })
//     } catch (error) {
//         console.log("ERROR:", error);
//         throw err
//     }
// })()