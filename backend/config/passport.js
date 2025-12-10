const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const Users = require("../api/users/models");

//création de la stratégie local que passport va utiliser pour authentifier l'utilisateur
passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await Users.findOne({ username });

      if (!user) throw new Error("User not found");

      const isValidPassword = await user.comparePassword(password);
      if (!isValidPassword) throw new Error("invalid Password");
      return done(null, user);
    } catch (error) {
      done(error, null);
    }
  })
);

//stocke dans la session
passport.serializeUser((user, done) => {
  done(null, user.id); //on utilise .id à la place de ._id pour économiser de l'espace dans la session
});

//récupérer depuis la session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await Users.findById(id).select("-password");
    done(null, user);
  } catch (error) {
    done(error);
  }
});

module.exports = passport;
