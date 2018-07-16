const mongoose = require('mongoose');

const apartmentSchema = mongoose.Schema({
  name: String,
  description: String,
  features: String,
  direction: String,
  images: String,
  price: Number,
  details: String,
  address: String,
  project_id: Object
});

module.exports = mongoose.model('apartments', apartmentSchema);
