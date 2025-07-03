
// Création d'Api Rest
// --> Test d'entrée CDA


// On appelle la lib express
const express = require("express")
const app = express()
// app = express et app on va l'utiliser ultérieurement


// on récupère la route blagues
app.use("/blagues", require("./routes/blagues.routes"))
// on va pouvoir récupèrer la route post pour ajouter des blagues

// On va lancer le serveur en local avec la méthode listen 
// D'abord on définit le port d'utilisation ->
const port = "4500"

app.listen(port, /* fonction fléchée */ () => console.log("le serveur s'est lancé  " + port ))