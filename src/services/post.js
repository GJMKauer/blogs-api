const { BlogPost, PostCategory, User, Category, sequelize } = require('../database/models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const transactionResult = await sequelize.transaction(async (transaction) => {
    const result = await BlogPost.create({ title, content, userId }, { transaction });

    const mappedPostCategories = categoryIds
      .map((categoryId) => ({ postId: result.dataValues.id, categoryId }));

    await PostCategory.bulkCreate(mappedPostCategories, { transaction });

    return result;
  });

  return transactionResult;
};

const getPosts = async () => {
  const result = await BlogPost.findAll({
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return result;
};

const findPostByPk = async (id) => {
  const result = await BlogPost.findByPk(id, {
    include: [{
      model: User,
      as: 'user',
      attributes: {
        exclude: ['password'],
      },
    }, {
      model: Category,
      as: 'categories',
    }],
  });

  return result;
};

const updatePost = async ({ id, title, content }) => {
  const toBeUpdatedPost = await findPostByPk(id);

  const result = await toBeUpdatedPost.update({ title, content });

  return result;
};

module.exports = {
  createPost,
  getPosts,
  findPostByPk,
  updatePost,
};
