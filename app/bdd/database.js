const { Sequelize } = require('sequelize') // On init l'ORM

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './carambar.sqlite',
  logging: false
});

module.exports = sequelize;