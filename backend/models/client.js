const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClientSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  organisation: {
    type: String,
    required: true,
  },
  archived: {
    type: Boolean,
    default: false
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Client = mongoose.model("Client", ClientSchema);

module.exports = Client;