const userService = require('../services/user');

const login = async (req, res) => {
  const { email } = req.body;
  const result = await userService.login({ email });

  return res.status(200).json({ token: result });
};

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  
  await userService.createUser({ displayName, email, password, image });

  const result = await userService.login({ email });

  return res.status(201).json({ token: result });
};

module.exports = {
  login,
  createUser,
};