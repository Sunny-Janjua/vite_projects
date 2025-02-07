import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "./.env" });

// Connection string from the .env file
const connection_string = process.env.CONNECTION_STRING;

async function ConnecDB() {
    try {
        const connection = await mongoose.connect(connection_string);
        console.log(connection)
        console.log(`MongoDB connected: ${connection.connection.host}`);
        return `MongoDB connected: ${connection.connection.host}`;
    } catch (error) {
        console.error("Mongoose connection Error:", error.message);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default ConnecDB;
