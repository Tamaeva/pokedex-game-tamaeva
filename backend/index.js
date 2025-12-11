const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const { default: MongoStore } = require("connect-mongo");
const passport = require("passport");

const pokemonRoutes = require("./api/Pokemons/routes");
const userRoutes = require("./api/users/routes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur MongoDB:", err));

require("./config/passport");

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongoUrl: process.env.MONGODB_URI,
      touchAfter: 24 * 3600,
    }),
    cookie: { maxAge: 604800000, httpOnly: true, secure: false },
  })
);

console.log("session configurée");

app.use(passport.initialize());
app.use(passport.session());

console.log("passport initialisé");

//utilisation des routes API
app.use("/api/pokemons", pokemonRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
