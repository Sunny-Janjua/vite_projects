import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
})

const conection_string=process.env.CONNTECTION_STRING

async function connectDB() {
    try {
        await mongoose.connect(conection_string)
        console.log("MongoDB Connected...")
    } catch (error) {
        console.log("Error connecting", error)
    }
    
}

export default connectDB;