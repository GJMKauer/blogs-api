const express = require('express');

const userController = require('./controllers/user');
const categoryController = require('./controllers/category');
const postController = require('./controllers/post');
const {
  validateLogin,
  validateUserCreation,
  validateToken,
  validateUserByPk,
  validateCategoryCreation,
  validatePostCreation,
  validatePostByPk,
  validatePostUpdate,
  validateAuthorization,
} = require('./middlewares/validations');

const app = express();

app.use(express.json());

app.post('/login', validateLogin, userController.login);
app.post('/user', validateUserCreation, userController.createUser);
app.get('/user', validateToken, userController.getUsers);
app.get('/user/:id', validateUserByPk, validateToken, userController.findUserByPk);
app.post('/categories', validateCategoryCreation, validateToken, categoryController.createCategory);
app.get('/categories', validateToken, categoryController.getCategories);
app.post('/post', validateToken, validatePostCreation, postController.createPost);
app.get('/post', validateToken, postController.getPosts);
app.get('/post/:id', validateToken, validatePostByPk, postController.findPostByPk);
app.put('/post/:id', validateToken, validatePostUpdate,
  validateAuthorization, postController.updatePost);
app.delete('/post/:id', validateToken, validatePostByPk,
  validateAuthorization, postController.deletePost);
app.delete('/user/me', validateToken, userController.deleteYourself);

module.exports = app;
