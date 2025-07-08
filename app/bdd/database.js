const { Sequelize } = require('sequelize') // On init l'ORM

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'app/bdd/carambar.sqlite',
  logging: false,
})

module.exports = sequelize
