const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  deck: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentSchema);
