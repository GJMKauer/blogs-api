const express = require('express');

const userController = require('./controllers/user');
const {
  validateLogin,
  validateUserCreation,
} = require('./middlewares/validations');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, userController.login);
app.post('/user', validateUserCreation, userController.createUser);

module.exports = app;
