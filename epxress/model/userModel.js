import { executeQuery } from '../config/db.js';

const getAllUsers = async () => {
  const query = 'SELECT * FROM users';
  const result = await executeQuery(query);
  return result.rows;
};

const createUser = async (name, email) => {
  const query = `
    INSERT INTO users (name, email)
    VALUES ($1, $2)
    RETURNING *;
  `;
  const result = await executeQuery(query, [name, email]);
  return result.rows[0];
};

export { getAllUsers, createUser };
