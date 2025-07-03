const { Sequelize } = require('sequelize')

const sequelize = new Sequelize( {
    dialect: 'sqlite',
    storage: 'carambar.sqlite',
    logging: false
})

module.exports = sequelize;