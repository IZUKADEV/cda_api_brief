const { DataTypes } = require('sequelize') // typer les données qu'on va envoyer/recevoir
const sequelize = require('../bdd/database')
// Sachant que vu que c'est du texte on va utiliser String

const Blagues = sequelize.define('Blagues', {
  content: {
    type: DataTypes.STRING, // on définit les types
    allowNull: false,
  },
})

// on exporte
module.exports = Blagues
