const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema(
  {
    pokedexId: { type: Number, required: true, unique: true, min: 1 },
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 50,
    },
    stats: {
      hp: { type: Number, min: 0 },
      attack: { type: Number, min: 0 },
      defense: { type: Number, min: 0 },
      spAtk: { type: Number, min: 0 },
      spDef: { type: Number, min: 0 },
      speed: { type: Number, min: 0 },
    },
    types: { type: [{ type: String, required: true }], required: true },
    height: { type: Number, required: true, min: 0 },
    weight: { type: Number, required: true, min: 0 },
    description: { type: String, maxlength: 500 },
    sprites: { back_default: String, front_default: String },
  },
  {
    timestamps: true,
  }
);

const Pokemon = mongoose.model("Pokemon", pokemonSchema);
