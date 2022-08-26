const jwt = require('jsonwebtoken');
const userService = require('../services/user');

require('dotenv').config();

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

const findUserByPk = async (req, res) => {
  const { id } = req.params;

  const result = await userService.findUserByPk(id);

  return res.status(200).json(result);
};

const deleteYourself = async (req, res) => {
  const { authorization } = req.headers;
  
  const { id } = jwt.verify(authorization, process.env.JWT_SECRET);

  await userService.deleteYourself(id);

  return res.status(204).send();
};

module.exports = {
  login,
  createUser,
  getUsers,
  findUserByPk,
  deleteYourself,
};