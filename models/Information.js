const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InformationSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  kind: {
    type: String,
  },
  facultad: {
    type: String,
  },
  code: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
});

module.exports = Information = mongoose.model("information", InformationSchema);
