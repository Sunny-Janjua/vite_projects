import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import createTable from "./scripts/initDB.js";

dotenv.config();



const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('API is running...'));

// Start Server
(async () => {
  try {
    await connectDB(); // Ensure the database is connected before starting
    await createTable(); // Create table if it does not exist
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Failed to start the server:', error.message);
    process.exit(1);
  }
})();
