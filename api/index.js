// import { log } from "console";
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js"
// import { json } from "body-parser";

dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to database")
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(6969 , ()=>{
    console.log("Server is running")
})

app.use("/api/user",UserRouter)
app.use("/api/user",authRouter)