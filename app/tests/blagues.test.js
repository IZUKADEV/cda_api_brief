import request from 'supertest'
import express from 'express'
import { GetAll } from '../controllers/blaguesControl.js'
import { vi } from 'vitest'

vi.mock('../models', () => ({
  Blagues: {
    findAll: vi.fn(() =>
      Promise.resolve([
        {
          id: 1,
          content: 'Quel est le comble pour un marin ? Avoir le nez qui coule',
          createdAt: '2025-07-07T11:24:25.044Z',
          updatedAt: '2025-07-07T11:24:25.044Z',
        },
      ]),
    ),
  },
}))

const app = express()
app.get('/blagues', GetAll)

describe('GET /blagues', () => {
  it('devrait retourner toutes les blagues', async () => {
    const res = await request(app).get('/blagues')
    expect(res.status).toBe(200)
    expect(res.body).toEqual([
      {
        id: 1,
        content: 'Quel est le comble pour un marin ? Avoir le nez qui coule',
        createdAt: expect.any(String),
        updatedAt: expect.any(String),
      },
    ])
  })
})
