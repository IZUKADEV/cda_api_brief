// On appelle la lib express
const express = require("express");
const app = express();
const sequelize = require('./bdd/database');

// Middleware JSON 
app.use(express.json());

// On appel le model des données
const Blagues = require("./models/blagues");
const routes = require("./routes/blagues.routes");

// On récupère la route blagues
app.use('/blagues', routes);

// Synchronisation BDD
sequelize.sync().then(() => console.log("db ready"));

// On lance le serveur
const port = "4500";
app.listen(port, () => console.log("le serveur s'est lancé sur le port " + port));