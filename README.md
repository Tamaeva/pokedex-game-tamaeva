# Pokédex Game - Gen 1

## Table des matières

- [Introduction](#Introduction)
- [Visuels](#visuels)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)
- [Installation](#installation)
- [Configuration](#configuration)
- [Utilisation](#utilisation)
- [API Routes](#api-routes)
- [Auteur](#auteur)

## Introduction

Jeu Pokédex interactif avec système d'authentification, basé sur la 1ère génération. Ce jeu permettra aux utilisateurs de redécouvrir les pokémons de la première génération dans toute leur splendeur.

Le professeur CHEN vous remettra un des trois starters de cette gen, votre objectif sera ensuite de tous les attraper.

### Visuels

- [Landing Page Visuel](docs/LANDINGPAGE.md)
- [Login Page Visuel ](docs/LOGINPAGE.md)
- [Pokédex Page Visuel](docs/POKEDEXPAGE.md)
- [Profile Page Visuel](docs/PROFILEPAGE.md)

## Fonctionnalités

- **Authentification** : inscription, connexion, déconnexion avec Passport JS
- **Choix du starter** : Bulbizarre, Salamèche et Carapuce
- **Système de combat** : Affrontement pokémon contre l'IA et d'autres joueurs
- **Pokédex** : affichage et filtrage par type des Pokémons
- **151 pokémon** : La 1ère Génération

## Technologies utilisés

### Backend

- Node.js
- Express.js
- Passport.js (authentification)
- Mongoose + MongoDB
- express-session + connect-mongo
- bcrypt (chiffrement des mots de passes)

### Frontend

- React.js + Vite
- Axios (requête HTTP)
- CSS

### API Externe

- [PokéAPI](https://pokeapi.co/) (données des pokémons)

## Installation

### Prérequis

- Node.js (v18+)
- MongoDB (Compass ou Atlas)
- npm

### Étapes

**1. Cloner le repos**

```bash
git clone https://github.com/Tamaeva/pokedew-game-tamaeva.git pokedex-game
cd pokedex-game
```

**2. Installer les dépendances backend**

```bash
cd backend
npm install
```

**3. Installer les dépendances frontend**

Rendez-vous dans le dossier `frontend` puis installez les dépendances nécessaires :

```bash
cd frontend
npm install
```

Ce projet utilise principalement :

- **React** pour construire l’interface utilisateur
- **React Router** pour la navigation
- **Bootstrap** et **React-Bootstrap** pour le style et les composants visuels
- **Axios** pour les requêtes HTTP

> Si vous avez un problème avec les dépendances, supprimez éventuellement le dossier `node_modules` puis relancez `npm install`.

_Note : pensez à vérifier que Node.js et npm sont bien installés sur votre machine._

**4. Configuration**

Créer un fichier `.env` dans le dossier `backend/`:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/pokedex-game
SESSION_SECRET=votre-tres-tres-longue-phrase-secrete
```

**5. Peupler la base de données**

```bash
cd backend
npm run seed
```

**6. Lancer l'application**
**Terminal 1 (Backend)**

```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend)**

```bash
cd backend
npm run dev
```

## Utilisation

1. **Créer un compte** : S'inscrire avec username + password
2. **Choisir son starter** : Bulbizarre, Carapuce, Salamèche
3. **Explorer le Pokédex** : Découvrer ou redécouvrer les différentes caractéristique des 151 premiers Pokémons
4. **Filtrer par type** : Boutons Plante, Eau, Feu, etc...
5. **Lancer un combat** : Affronter un pokémon sauvage aléatoire
6. **Voir ses stats** : Victoire, défaite, ratio

### API Routes

| Méthode | Endpoint                   | Description            |
| ------- | -------------------------- | ---------------------- |
| GET     | `/api/pokemons`            | Liste tous les Pokémon |
| GET     | `/api/pokemons/random`     | Pokémon aléatoire      |
| GET     | `/api/pokemons/:id`        | Un Pokémon par ID      |
| GET     | `/api/pokemons/type/:type` | Pokémon par type       |

### Utilisateurs

| Méthode | Endpoint                  | Description        |
| ------- | ------------------------- | ------------------ |
| POST    | `/api/users/register`     | Inscription        |
| POST    | `/api/users/login`        | Connexion          |
| POST    | `/api/users/logout`       | Déconnexion        |
| GET     | `/api/users/profile/: id` | Profil utilisateur |
| POST    | `/api/users/starter`      | Choisir le starter |
