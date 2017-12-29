const mongoose = require('mongoose');
const { Schema } = mongoose;

// create schema
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

// recipient is a subdocument collection of survey model
// so export it instead of registering it in mongoDB
module.exports = recipientSchema;