const { BlogPost, PostCategory, sequelize } = require('../database/models');

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

module.exports = {
  createPost,
};
