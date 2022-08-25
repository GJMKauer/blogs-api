/**
* 
* @param {import('sequelize').Sequelize} sequelize
* @param {import('sequelize').DataTypes} DataTypes
*/

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'Categories',
  });

  return Category;
};