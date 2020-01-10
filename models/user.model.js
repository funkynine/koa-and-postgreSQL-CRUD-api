const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Model = Sequelize.Model;

class User extends Model {}
User.init({
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'test',
  timestamps: false
  // options
});

module.exports = { User };
