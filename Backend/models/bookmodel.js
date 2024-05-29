const mongoose = require("mongoose");

const bookschema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishYear: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true, // Correct option name for timestamps
  }
);

const BookModel = mongoose.model("Book", bookschema);
module.exports = BookModel;
