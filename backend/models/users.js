const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  },
  usertype: {
    type: String,
    required: true,
    enum: ["admin", "client"],
  },
  imgurl: {
    type: String,
  },
  firstlogin:{
    type: Boolean,
    default: true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;