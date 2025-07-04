


// On appelle la lib express
const express = require("express")
const app = express()
const sequelize = require('./bdd/database')

// On appel le model des données
const Blagues = require("./models/blagues");
const routes = require("./routes/blagues.routes")

// on sync l'ORM avec la BDD

sequelize.sync().then(() => console.log("db ready")) // Pour voir si cela fonctionne, j'ai testé avec un console log pour savoir si cela était bien synchronisé



// on récupère la route blagues
app.use('/blagues', routes)


// On va lancer le serveur en local avec la méthode listen 
// D'abord on définit le port d'utilisation ->
const port = "4500"

app.listen(port, /* fonction fléchée */ () => console.log("le serveur s'est lancé  " + port ))