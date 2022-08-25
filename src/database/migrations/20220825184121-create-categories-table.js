'use strict';

module.exports = {
  /**
  * 
  * @param {import('sequelize').QueryInterface} queryInterface
  * @param {import('sequelize').Sequelize} Sequelize
  */

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Categories', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Categories');
  }
};
