'use strict';

var ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = function (dataProject, callback) {
  ourProjects.findByIdAndUpdate(dataProject._id, {
    $set: {
      name: dataProject.name,
      description: dataProject.description,
      features: dataProject.features,
      typesOfApartments: dataProject.typesOfApartments,
      videoUrl: dataProject.videoUrl,
      image360Url: dataProject.image360Url,
      images: dataProject.images,
      address: [dataProject.street, dataProject.district, dataProject.city],
      date: Date.now(),
      star: dataProject.star
    }
  }, { new: true }, function (error, result) {
    if (error) return callback(error);
  }).then(function (res) {
    return callback(null, res);
  }).catch(function (err) {
    return callback(err);
  });
};