import Blagues from '../models/blagues.js'

export const Create = async (req, res) => {
  const { content } = req.body

  if (!content) {
    return res.status(400).json({ error: 'Blague Requise' })
  }

  const blagues = await Blagues.create({ content })
  res.status(201).json(blagues)
}

export const GetAll = async (req, res) => {
  const blagues = await Blagues.findAll()
  res.json(blagues)
}

export const GetById = async (req, res) => {
  const blagues = await Blagues.findByPk(req.params.id)
  if (!blagues) {
    return res.status(404).json({ error: 'non trouvée' })
  }
  res.json(blagues)
}

export const GetRandom = async (req, res) => {
  const count = await Blagues.count()
  const random = Math.floor(Math.random() * count)
  const blagues = await Blagues.findOne({ offset: random })
  res.json(blagues)
}
