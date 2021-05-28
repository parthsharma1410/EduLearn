
const mongoose = require("mongoose") // requiring the mongoose package

const commentsSchema = new mongoose.Schema({
  // creating a schema for todo
  email: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: false, // it is required
  },
  comment: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: true, // it is required
  },
  reply: {
    type: String, // task is a string
     // it has to be unique: unique: true,
    required: false, // it is required
  },
})

const commentsModel = mongoose.model("Comments", commentsSchema) // creating the model from the schema

module.exports = commentsModel // exporting the model