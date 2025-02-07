import { getAllUsers } from '../model/userModel.js';
import { createUser } from '../model/userModel.js';

const fetchUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).send('Server Error');
  }
};

const addUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await createUser(name, email);
    res.json(user);
  } catch (error) {
    console.error('Error adding user:', error.message);
    res.status(500).send('Server Error');
  }
};

export { fetchUsers, addUser };
