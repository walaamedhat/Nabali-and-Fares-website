const mongoose = require('mongoose');

const mediaCenterSchema = mongoose.Schema({
  name:String,
  date: Date,
  type: String,
  discription: String,
  video: String,
  secondaryImages: Array,
  mainImage:String
})

module.exports = mongoose.model('mediaCenter', mediaCenterSchema);