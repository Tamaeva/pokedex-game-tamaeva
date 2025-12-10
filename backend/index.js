const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const passport = require("passport");

const pokemonRoutes = require("./api/Pokemons/routes");
const userRoutes = require("./api/users/routes");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
require("./config/passport");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    cookie: { maxAge: 604800, httpOnly: true, secure: false },
  })
);
app.use(passport.initialise());
app.use(passport.session());

// Connexion MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur MongoDB:", err));

//utilisation des routes API
app.use("/api/pokemons", pokemonRoutes);

app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
