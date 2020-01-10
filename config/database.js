const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '1001', {
  host: 'localhost',
  port: 5000,
  dialect: 'postgres',
});

function connect() {
  sequelize
    .authenticate()
    .then(() => {
      console.log('CONNECT: Connection has been established successfully.');
    })
    .catch(err => {
      console.error('ERROR: Unable to connect to the database:', err);
    });
}

connect();

sequelize.sync();

module.exports = sequelize;
