const { Sequelize } = require('sequelize');
const path = require('path');

// using sqlite file in the project directory
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '../database.sqlite'),
  logging: false
});

const Contato = require('./Contato')(sequelize);

module.exports = {
  sequelize,
  Contato
};