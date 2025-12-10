const express = require("express");
const Users = require("./models");

//passport et express-validator à faire

const router = express.Router();

//===============Routes============

//POST register (inscription)
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

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
    });

    await User.save();
    res.status(201).json({
      success: true,
      user: {
        id: User._id,
        username: User.username,
        createdAt: User.createdAt,
      },
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});

//POST login (Connexion)
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username | !password) {
      return res.status(400).json(res.message);
    }

    const user = await Users.findOne({ username: username });
    if (!user) {
      return res.status(404).json(res.message);
    }
    const isValid = await user.comparePassword(password);
    if (!isValid) {
      return res.status(401).json(res.message);
    }
    return res.status(200).json({
      success: true,
      message: `Vous êtes connecté en tant que : ${username}`,
    });
  } catch (error) {
    error.json(error.message);
  }
});
//=============Fin des routes======
module.exports = router;
