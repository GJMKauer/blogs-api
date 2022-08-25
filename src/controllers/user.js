const userService = require('../services/user');

const login = async (req, res) => {
  const { email } = req.body;
  const result = await userService.login({ email });

  return res.status(200).json({ token: result });
};

module.exports = {
  login,
};