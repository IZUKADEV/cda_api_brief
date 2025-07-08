import { DataTypes } from 'sequelize'
import sequelize from '../bdd/database.js'

const Blagues = sequelize.define('Blagues', {
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Blagues
