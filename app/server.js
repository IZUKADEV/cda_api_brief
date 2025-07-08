import express from 'express'
import sequelize from './bdd/database.js'
import swaggerUI from 'swagger-ui-express'
import swaggerSpec from './docs/swagger-config.js'
import cors from 'cors'
import routes from './routes/blagues.routes.js' // Import en haut, pas au milieu

const app = express()

app.use(cors())
app.use(express.json())

app.use('/blagues', routes)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

async function start() {
  try {
    await sequelize.sync()
    console.log('db ready')
  } catch (err) {
    console.error('Erreur de synchronisation BDD:', err)
  }
}

start()

const port = 10000
app.listen(port, () =>
  console.log(`Le serveur s'est lancé sur le port ${port}`),
)
