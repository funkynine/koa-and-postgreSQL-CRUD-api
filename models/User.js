'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categories_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
    }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Category, {
      through: models.User
    });
  };
  return User;
};