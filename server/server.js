const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const pokemonRoutes = require("./api/Pokemons/routes");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//utilisation des routes API
app.use("/api", pokemonRoutes);

// Connexion MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur MongoDB:", err));

// Route test
app.get("/api/test", (req, res) => {
  res.json({ message: "API Pokédex fonctionne !" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
