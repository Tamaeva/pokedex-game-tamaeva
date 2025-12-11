const express = require("express");
const passport = require("passport");

const LocalStrategy = require("passport-local");
const Users = require("./models");

//passport et express-validator à faire

const router = express.Router();

//===============Routes============

//POST register (inscription)
router.post("/register", async (req, res) => {
  try {
    const { username, password, starter } = req.body;

    if (!password || !username) {
      return res
        .status(400)
        .json({ message: "username ou password manquants" });
    }
    const existUser = await Users.findOne({ username: username });

    if (existUser) {
      return res.status(400).json({ message: "User déjà existant" });
    }

    const User = new Users({
      username: username,
      password: password,
      starter: starter,
    });

    await User.save();
    res.status(201).json({
      success: true,
      user: {
        id: User._id,
        username: User.username,
        starter: User.starter,
        createdAt: User.createdAt,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//POST login (Connexion)
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    success: true,
    user: {
      id: req.user._id,
      username: req.user.username,
      starter: req.user.starter,
    },
  });
});

//POST logout(déconnexion)
router.post("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.json({ success: true, message: "Déconnexion réussie ! " });
    });
  });
});
//=============Fin des routes======
module.exports = router;
