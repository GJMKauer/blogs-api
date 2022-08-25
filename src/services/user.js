const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

require('dotenv').config();

const login = async ({ email }) => {
  const result = await User.findOne({ where: { email } });

  const token = jwt.sign(
    { id: result.dataValues.id },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '1d' },
  );

  return token;
};

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });

  const token = login({ email });

  return token;
};

module.exports = {
  login,
  createUser,
};
