const express = require("express");
const Users = require("./models");

//passport et express-validator à faire

const router = express.Router();

//===============Routes============
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

//=============Fin des routes======
module.exports = router;
