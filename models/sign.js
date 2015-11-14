var mongoose = require('mongoose');

var signSchema = new mongoose.Schema({
  image: String,
  name: String,
  period: String,
  description: String
})

var Sign = mongoose.model("Sign", signSchema);

module.exports = Sign;