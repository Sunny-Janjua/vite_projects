import express from 'express';
import dotenv from "dotenv";
import connectDB from './db/connection.js';

// Load environment variables from .env file
dotenv.config({
    path:"./.env"
});

const portName = process.env.PORT_NAME || 5000;

const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

(async () => {
    try {
        await connectDB();
        console.log('MongoDB connected successfully');
        
        // Start the server
        app.listen(portName, () => {
            console.log(`Listening on ${portName}`);
        });
    } 
    catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
})();
