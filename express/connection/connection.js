import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" }); // Load environment variables

const mongoose_connection_string = process.env.CONNECTION_STRING;

async function mongoose_connection() {
    try {
        // Check if the connection string is provided
        if (!mongoose_connection_string) {
            throw new Error("MongoDB connection string is missing. Check your .env file.");
        }

        // Connect to MongoDB
        const connection = await mongoose.connect(mongoose_connection_string);
        console.log(`Connected to MongoDB: ${connection.connection.name}`);
        return "MongoDB Connected!";
    } catch (error) {
        console.error("Mongoose connection error:", error.message);
        throw new Error("Failed to connect to MongoDB");
    }
}

export default mongoose_connection;
