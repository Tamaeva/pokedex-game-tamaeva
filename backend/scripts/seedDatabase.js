const mongoose = require("mongoose");
const Pokemon = require("../api/Pokemons/models");
require("dotenv").config();

// Connexion à mongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connecté");
    sendDatabase();
  })
  .catch((err) => {
    console.log("Erreur de connexion : ", err);
    process.exit(1);
  });

async function sendDatabase() {
  try {
    console.log("Début du seeding...");

    //verification si DB est déjà remplie
    const count = await Pokemon.countDocuments();
    if (count > 0) {
      console.log(`${count} de Pokémon déjà dans la base de donnée`);
      console.log("Suppression des anciennes données");
      await Pokemon.deleteMany({});
      console.log("Base nettoyé");
    }

    //récupérer les 151 Pokémons
    console.log("Récupération de la liste des 151 premiers Pokémons");

    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    console.log("Donnée récupérer");

    // Pour chaque Pokémon, récupérer les détails
    console.log("récupération des détails sur chaque pokémons.");
    for (const pokemonData of data.results) {
      const url = pokemonData.url;
      await fetchAndSavePokemon(url);
    }

    //Sauvegarder dans MongoDB

    console.log("Seeding terminé");
    process.exit(0);
  } catch (error) {
    console.error("Erreur pendant le seeding...", error);
    process.exit(1);
  }
}

async function fetchAndSavePokemon(url) {
  try {
    //récuperation des données
    const response = await fetch(url);
    const pokemonData = await response.json();

    //formatages des données
    pokedexId = pokemonData.id;
    name = pokemonData.name;
    height = pokemonData.height;
    weight = pokemonData.weight;
    types = pokemonData.types.map((t) => t.type.name);
    stats = {
      hp: pokemonData.stats.find((s) => s.stat.name == "hp")?.base_stat || 0,
      attack:
        pokemonData.stats.find((s) => s.stat.name == "attack")?.base_stat || 0,
      defense:
        pokemonData.stats.find((s) => s.stat.name == "defense")?.base_stat || 0,
      spAtk:
        pokemonData.stats.find((s) => s.stat.name == "spAtk")?.base_stat || 0,
      spDef:
        pokemonData.stats.find((s) => s.stat.name == "spDef")?.base_stat || 0,
      speed: pokemonData.stats.find((s) => s.stat.name == "speed")?.base_stat,
    };
    sprites = {
      back_default: pokemonData.sprites.back_default,
      front_default: pokemonData.sprites.front_default,
    };

    // creer et sauvegarder le document
    const newPokemon = new Pokemon({
      pokedexId: pokedexId,
      name: name,
      types: types,
      sprites: sprites,
      stats: stats,
      height: height,
      weight: weight,
    });

    await newPokemon.save();
  } catch (error) {
    console.error("erreur lors du load and save", error);
  }
}
