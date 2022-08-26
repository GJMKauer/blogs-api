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

module.exports = {
  createPost,
};