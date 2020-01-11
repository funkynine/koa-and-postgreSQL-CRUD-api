'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    path: DataTypes.STRING
  }, {});
  Image.associate = function(models) {
    // associations can be defined here
    Image.hasMany(models.User, {
      as: 'User', foreignKey: 'id'
    });
  };
  return Image;
};