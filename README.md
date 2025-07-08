# API Carambar Test CDA 

Bienvenue sur le dépôt de la **Carambar API**, un projet réalisé dans le cadre du **CDA**

- 🛠️ Documentation Swagger
- ✅ Récupérer Créer une blague Carambar

## Tech Stack

-- **Backend** : Node.js, Express
- **ORM** : Sequelize (avec SQLite)
- **Documentation** : Swagger (via `swagger-jsdoc` + `swagger-ui-express`)
- **Déploiement** :
  - Render.com (API)
  - GitHub Pages (frontend statique)
 

## Routes

- /blagues en méthode `POST`
- /blagues en méthode `Get` - permet de récupérer toutes les blagues
- /blagues/random/blagues en méthode `Get` - permet de récupérer les blagues en mode random
- /blagues/:id en méthode `Get` - donnez un chiffre pour récupérer une blague en bdd

## Installation

```bash
# Clone le repo
git clone https://github.com/IZUKADEV/cda_api_brief.git
cd cda_api_brief

# Installe les dépendances
npm install

# Lance le serveur en développement
npm run dev
```
