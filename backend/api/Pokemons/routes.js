const express = require("express");
const Pokemon = require("./models");

const router = express.Router();

// ============== Routes ==============
//GET Tous les Pokémons
router.get("/allPokemons", async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.error(error.message);
  }
});

//GET Un Pokémon random
router.get("/randomPokemon", async (req, res) => {
  try {
    const randomId = parseInt(Math.random() * 151) + 1;
    const pokemon = await Pokemon.findOne({ pokedexId: randomId });
    res.json(pokemon);
  } catch (error) {
    console.error(error.message);
  }
});

//GET Un Pokémon avec id
router.get("/:id", async (req, res) => {
  try {
    const pokemonId = req.params.id;
    const pokemon = await Pokemon.findOne({ pokedexId: pokemonId });

    if (!pokemon) {
      res.status(404).json({ message: "Pokémon non trouvé." });
    }
    res.json(pokemon);
  } catch (error) {
    console.error(error.message);
  }
});

//Get Pokémons filtrer par type
router.get("/type/:typeN", async (req, res) => {
  const typePokemon = req.params.typeN;
  const pokemon = await Pokemon.find({ types: typePokemon });

  if (!pokemon) {
    res.status(404).json({ message: "Ce type n'existe pas " });
  }
  res.json(pokemon);
});

// Route de test
router.get("/", (req, res) => {
  res.json({ message: "Routes pokémon fonctionnent" });
});

//======================================

module.exports = router;
