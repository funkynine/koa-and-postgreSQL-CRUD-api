'use strict';

const logger = require('../logger/logger');
const LOG = require('../const/const');

module.exports = {
  up: (queryInterface, Sequelize) => {
    logger({message: LOG.DB.SEEDERS, status: LOG.SUCCESS, method: LOG.DB.INSERT})
    return queryInterface.bulkInsert('Users', [{
      categories_id: 1,
      firstName: 'Petr3',
      lastName: 'Fedchenko3',
      email: 'petrfedchenko3@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
