const swaggerDoc = require('swagger-jsdoc')
const path = require('path')

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

module.exports = swaggerSpec
