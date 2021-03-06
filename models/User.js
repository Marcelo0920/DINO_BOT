const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
  },
  registro: {
    type: Number,
    required: true,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
