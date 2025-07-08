/**
 * @swagger
 * /blagues:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste de blagues
 */

/**
 * @swagger
 * /blagues/random:
 *   get:
 *     summary: Blague aléatoire
 *     responses:
 *       200:
 *         description: Blague aléatoire
 */

/**
 * @swagger
 * /blagues/{id}:
 *   get:
 *     summary: Recherche une blague par son ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la blague
 *     responses:
 *       200:
 *         description: Blague trouvée
 */

/**
 * @swagger
 * /blagues:
 *   post:
 *     summary: Crée une nouvelle blague
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - content
 *             properties:
 *               content:
 *                 type: string
 *                 example: Pourquoi les canards ont-ils autant d'amis ? Parce qu’ils sont toujours dans le coin-coin.
 *     responses:
 *       201:
 *         description: Blague créée
 */

import express from 'express'
import * as controler from '../controllers/blaguesControl.js'

const router = express.Router()

// Route random avant route avec paramètre dynamique pour éviter conflit
router.get('/random', controler.GetRandom)

// Routes classiques
router.post('/', controler.Create)
router.get('/', controler.GetAll)
router.get('/:id', controler.GetById)

export default router
