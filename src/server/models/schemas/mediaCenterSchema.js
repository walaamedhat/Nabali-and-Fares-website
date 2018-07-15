const mongoose = require('mongoose');

const mediaCenterSchema = mongoose.Schema({
  name:String,
  data: Date,
  type: String,
  discription: String,
  video: String,
  images: Array
})

module.exports = mongoose.model('mediaCenter', mediaCenterSchema);
