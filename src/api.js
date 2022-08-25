const express = require('express');

const userController = require('./controllers/user');
const { validateLogin } = require('./middlewares/LoginValidation');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, userController.login);

module.exports = app;
