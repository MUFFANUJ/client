// import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.routes.js";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(6969 , ()=>{
    console.log("Server is running")
})

app.use("/api/user",UserRouter)