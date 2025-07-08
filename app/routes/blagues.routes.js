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

const express = require('express')
const router = express.Router() // On récupère le router d'expressjs
const controler = require('../controllers/blaguesControl')

// On va donc créer plusieurs routes

// Une pour pouvoir ajouter des blagues
router.post('/', controler.Create) // on appelle la function create
// Une pour toutes les blagues
router.get('/', controler.GetAll)
// Une pour l'ID
router.get('/:id', controler.GetById)
// Une pour le random
router.get('/random/blagues', controler.GetRandom)

module.exports = router
