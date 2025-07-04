const express = require('express');
const router = express.Router(); // On récupère le router d'expressjs
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

module.exports = router;

