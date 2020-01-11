'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    title: DataTypes.STRING
  }, {});
  Task.associate = function(models) {
    // associations can be defined here
    Task.hasOne(models.User, {
      as: 'User', foreignKey: 'id'
    });
  };
  return Task;
};