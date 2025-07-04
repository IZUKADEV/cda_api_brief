// On appelle la lib express
const express = require("express");
const app = express();
const sequelize = require('./bdd/database');

// Middleware JSON 
app.use(express.json());

// la variable "routes" appelle les routes
const routes = require("./routes/blagues.routes");

// On récupère la route blagues
app.use('/blagues', routes);

// Synchronisation BDD
sequelize.sync().then(() => console.log("db ready"));

// On lance le serveur
const port = "10000";
app.listen(port, () => console.log("le serveur s'est lancé sur le port " + port));