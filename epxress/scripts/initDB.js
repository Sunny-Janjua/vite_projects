import { executeQuery } from '../config/db.js';

const createTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(150) UNIQUE NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await executeQuery(query);
    console.log('Users table created or already exists.');
  } catch (error) {
    console.error('Error creating table:', error.message);
  }
};

export default createTable;