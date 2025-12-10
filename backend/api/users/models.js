const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const usersSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

//Middleware pre save
usersSchema.pre("save", async function (next) {
  //si le mot de passe n'a pas été modifié
  if (!this.isModified("password")) return;

  // Hasher le mot de passe
  this.password = await bcrypt.hash(this.password, 10);
});

usersSchema.methods.comparePassword = async function (tryPassword) {
  const bcrypt = require("bcrypt");
  return await bcrypt.compare(tryPassword, this.password);
};

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
