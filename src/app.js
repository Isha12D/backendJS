//In the provided code, app is an instance of an Express application. Express is a web application framework for Node.js that simplifies the process of building web servers and APIs

import express from "express"
import cors from "cors" //CORS- cross origin resource sharing
import cookieParser from "cookie-parser"//cookie - to read users cookie

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
//url encoded used bcoz some url , when we search isha doifode they make isha+doifode and some make isha%doifode , so to manage that
app.use(express.urlencoded({extended:true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

//routes import
import userRouter from './routes/user.routes.js';


//routes declaration
app.use("/api/v1/users",userRouter)

export {app}