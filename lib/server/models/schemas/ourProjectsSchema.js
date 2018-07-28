'use strict';

var mongoose = require('mongoose');

var projectsSchema = mongoose.Schema({
  name: String,
  description: String,
  features: Object,
  typesOfApartments: Array,
  videoUrl: String,
  image360Url: String,
  images: Array,
  address: Array,
  date: Date,
  star: Boolean
});

var ourProjects = mongoose.model('ourProjects', projectsSchema);

module.exports = ourProjects;