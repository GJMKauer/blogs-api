const userService = require('../services/user');

const login = async (req, res) => {
  const { email } = req.body;
  const result = await userService.login({ email });

  return res.status(200).json({ token: result });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  const result = await userService.createUser({ displayName, email, password, image });

  return res.status(201).json({ token: result });
};

const getUsers = async (_req, res) => {
  const result = await userService.getUsers();

  return res.status(200).json(result);
};

module.exports = {
  login,
  createUser,
  getUsers,
};