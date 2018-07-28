'use strict';

var user = require('./models/schemas/user_schema');
var ourProjects = require('./models/schemas/ourProjectsSchema');
var mediaCenter = require('./models/schemas/mediaCenterSchema');
var comment = require('./models/schemas/commentSchema');
var apartment = require('./models/schemas/apartmentSchema');

var build = function build() {
  ourProjects.create({});
  user.create({});
  mediaCenter.create({});
  comment.create({});
  apartment.create({});
};

module.exports = build;