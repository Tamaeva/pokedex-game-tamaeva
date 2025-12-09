const express = require("express");
const Pokemon = require("./models");

const router = express.Router();

// ============== Routes ==============
router.get("/allPokemons", async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
  } catch (error) {
    console.error(error.message);
  }
});

// Route de test
router.get("/", (req, res) => {
  res.json({ message: "Routes pokémon fonctionnent" });
});

//======================================

module.exports = router;
