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

const getUsers = async () => {
  const result = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return result;
};

const findUserByPk = async (id) => {
  const result = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  return result;
};

const deleteYourself = async (id) => {
  await User.destroy({
    where: { id },
  });
};

module.exports = {
  login,
  createUser,
  getUsers,
  findUserByPk,
  deleteYourself,
};
