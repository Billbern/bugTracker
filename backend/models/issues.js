const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IssuesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  screenshot: {
    type: String,
  },
  project: {
    type: String,
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Issue = mongoose.model("Issue", IssuesSchema);

module.exports = Issue;