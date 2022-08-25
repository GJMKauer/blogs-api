const express = require('express');

const userController = require('./controllers/user');
const {
  validateLogin,
  validateUserCreation,
  validateToken,
  validateUserByPk,
} = require('./middlewares/validations');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, userController.login);
app.post('/user', validateUserCreation, userController.createUser);
app.get('/user', validateToken, userController.getUsers);
app.get('/user/:id', validateUserByPk, validateToken, userController.findUserByPk);

module.exports = app;
