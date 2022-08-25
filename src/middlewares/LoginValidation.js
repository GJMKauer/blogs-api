// const userService = require('../services/user');
const { User } = require('../database/models');
const {
  requiredLoginFields,
  invalidData,
} = require('../helpers/index');

const validateLogin = async (req, res, next) => {
  const { email, password } = req.body;

  const result = await User.findOne({ where: { email } });

  if (!email || !password) {
    return res.status(400).json({ message: requiredLoginFields });
  }

  if (!result) {
    return res.status(400).json({ message: invalidData });
  }

  next();
};

module.exports = {
  validateLogin,
};