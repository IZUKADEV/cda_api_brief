// On appelle la lib express
const express = require('express')
const app = express()
const sequelize = require('./bdd/database')

const swaggerUI = require('swagger-ui-express')
const swaggerSpec = require('./docs/swagger-config')

// On init Cors qui permet de gérer les requêtes entre le frontend et le backend
// Le navigateur bloque la requête si CORS n’est pas activé.
const cors = require('cors')
app.use(cors())

// Middleware JSON qui permet de parser le corps des requêtes en JSON
app.use(express.json())

// la variable "routes" appelle les routes
const routes = require('./routes/blagues.routes')

// On récupère la route blagues
app.use('/blagues', routes)

// api docs
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
// Synchronisation BDD
sequelize.sync().then(() => console.log('db ready'))

// On lance le serveur
const port = '10000'
app.listen(port, () =>
  console.log("le serveur s'est lancé sur le port " + port),
)
