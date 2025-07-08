import { Sequelize } from 'sequelize' // On init l'ORM

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'app/bdd/carambar.sqlite',
  logging: false,
})

export default sequelize
