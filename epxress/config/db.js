import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('Connected to PostgreSQL');
    client.release();
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

const executeQuery = async (query, params = []) => {
  try {
    const client = await pool.connect();
    const result = await client.query(query, params);
    client.release();
    return result;
  } catch (error) {
    console.error('Query execution error:', error.message);
    throw error;
  }
};

export { connectDB, executeQuery };
