'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.belongsToMany(models.User, {
      through: models.User
    });
  };
  return Category;
};