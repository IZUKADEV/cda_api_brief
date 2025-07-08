import request from 'supertest'
import express from 'express'
import { GetAll } from '../controllers/blague.controller'

// Mock du modèle Blagues
vi.mock('../models', () => ({
  Blagues: {
    findAll: vi.fn(() => Promise.resolve([
      { id: 1, question: "Pourquoi ?", reponse: "Parce que." }
    ])),
  }
}))


const app = express()
app.get('/blagues', GetAll)

describe('GET /blagues', () => {
  it('devrait retourner toutes les blagues', async () => {
    const res = await request(app).get('/blagues')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([
      { id: 1, question: "Pourquoi ?", reponse: "Parce que." }
    ])
  })
})
