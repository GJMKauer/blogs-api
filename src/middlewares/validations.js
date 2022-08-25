const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
const {
  requiredLoginFields,
  invalidData,
  shortDisplayName,
  invalidEmail,
  shortPassword,
  alreadyTakenEmail,
  emailRegex,
  notFoundToken,
  invalidToken,
} = require('../helpers/index');

require('dotenv').config();

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

const validateUserCreation = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  const result = await User.findAll({
    attributes: ['email'],
  });

  const alreadyExists = result.find((user) => user.dataValues.email === email);

  if (displayName.length < 8) {
    return res.status(400).json({ message: shortDisplayName });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: invalidEmail });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: shortPassword });
  }

  if (alreadyExists) {
    return res.status(409).json({ message: alreadyTakenEmail });
  }

  next();
};

const validateToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: notFoundToken });
    }
  
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (error) {
    return res.status(401).json({ message: invalidToken });
  }
  
  next();
};

module.exports = {
  validateLogin,
  validateUserCreation,
  validateToken,
};