var mongoose = require('mongoose');

var Sign = require('../models/sign');

var hscopeSchema = new mongoose.Schema({
  created_at: Date,
  title: String,
  luckyNumbers: String,
  description: String,
  sign: Sign.schema
})

//method for generate six lucky lottery numbers with each horoscope

hscopeSchema.methods.generateLuckyNumbers = function(){
  var minNumber = 1;
  var maxNumber = 49;
  var luckyArray = [];
  var j=0;

  while (j<6) {
    luckyArray.push(Math.floor(Math.random()*(maxNumber-minNumber+1)+minNumber));

    if (j<1) {
      j++;
    }
    else if (luckyArray[j]===luckyArray[j-1]) {
      luckyArray.pop();
    }
    else {
      j++;
    }
  }
  return luckyArray;
};

var Hscope = mongoose.model("Hscope", hscopeSchema);

module.exports = Hscope