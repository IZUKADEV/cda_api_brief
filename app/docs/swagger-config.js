import swaggerDoc from 'swagger-jsdoc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Api Carambar',
      version: '1.0.0',
      description:
        'Une api fait par un très débutant en backend pour un test technique en CDA',
    },
    servers: [
      {
        url: 'http://localhost:10000',
        description: 'Local',
      },
      {
        url: 'https://cda-api-brief.onrender.com/blagues/',
        description: 'Prod',
      },
    ],
  },
  apis: [path.join(__dirname, '../routes/*.js')],
}

const swaggerSpec = swaggerDoc(options)

export default swaggerSpec
