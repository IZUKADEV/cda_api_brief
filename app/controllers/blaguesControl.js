// là on va contrôler les données pour savoir qu'est ce qu'on va avoir besoin en fonction des routes 
const Blagues = require("../models/blagues");

exports.Create = async (req, res) => { // on va créer une fonction asynchrone pour créer du délai et pour que toutes les étapes soient compléter au fur à mesure
    const { content } = req.body

    if(!content){ // Si content n'existe pas ou est vide 
        return res.status(400).json(
        {error: "Blague Requise"}
        ) // return une erreur 400 blague requise
    }

    const blagues = await Blagues.create({ content });  // On attend que la blague est créer puis on envoie les données en bdd
    res.status(201).json(blagues);
}

// maintenant on va faire la même chose avec les autres types de routes

exports.GetAll = async(req,res) => {
    // on utilise la méthode find all
    const blagues = await Blagues.findAll() // on va attendre que la requête est effectuée pour aller chercher toutes les données 
    res.json(blagues)
} 

exports.GetById = async (req,res) => {
    const blagues = await Blagues.findByPk(req.params.id); // Méthode find By PK qui signifie find by Id entre guillemet
    if(!blagues) {
        return res.stauts(404).json({error: 'non trouvée'}) // Si l'id correspond à aucune blague = non trouvée 404
    }
    res.json(blagues)
}

exports.GetRandom = async (req, res) => {
    const count = await Blagues.count() // On va générer un nombre aléatoire avec le math random
    const random = Math.floor(Math.random() * count); // On génère un nombre aléatoire 
    const blagues = await Blagues.findOne({offset: random}); // et là on génère un ID qui permet d'aller chercher dans la BDD
    res.json(blagues)
}


