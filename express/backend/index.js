import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import ConnecDB from './db/connection.js';

// Load environment variables
dotenv.config({ path: "./.env" });

// Set the port
const port_name = process.env.PORT_NAME || 5000;

// Initialize the app
const app = express();

// Middlewares
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({extended: true}));

// Self-invoking async function
;(async () => {
    try {
        // Database connection
        const connectDB = await ConnecDB();
        console.log(connectDB);
        console.log("Mongoose DB is Connected");

        // Start the server
        app.listen(port_name, () => {
            console.log(`Server is running at http://localhost:${port_name}`);
        });
    } catch (error) {
        console.error("Error while connecting to the database or starting the server:", error.message);
        process.exit(1); // Exit process on failure
    }
})();
