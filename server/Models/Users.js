const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
    },
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    fullname: {
      type: String,
    },
  },
  {
    collection: "user",
  }
);
module.exports = mongoose.model("Users", UserSchema);