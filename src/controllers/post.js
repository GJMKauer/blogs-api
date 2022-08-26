const jwt = require('jsonwebtoken');
const postService = require('../services/post');

require('dotenv').config();

const createPost = async (req, res) => {
  const { authorization } = req.headers;
  const { title, content, categoryIds } = req.body;

  const tokenVerify = jwt.verify(authorization, process.env.JWT_SECRET);

  const result = await postService
    .createPost({ title, content, categoryIds, userId: tokenVerify.id });

  return res.status(201).json(result);
};

const getPosts = async (_req, res) => {
  const result = await postService.getPosts();

  return res.status(200).json(result);
};

const findPostByPk = async (req, res) => {
  const { id } = req.params;

  const result = await postService.findPostByPk(id);

  return res.status(200).json(result);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const result = await postService.updatePost({ id, title, content });

  return res.status(200).json(result);
};

module.exports = {
  createPost,
  getPosts,
  findPostByPk,
  updatePost,
};