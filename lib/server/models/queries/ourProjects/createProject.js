'use strict';

var ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = function (dataProject, callback) {
  console.log(dataProject);
  ourProjects.create({
    name: dataProject.name,
    description: dataProject.description,
    features: dataProject.features,
    typesOfApartments: dataProject.typesOfApartments,
    videoUrl: dataProject.videoUrl,
    image360Url: dataProject.image360Url,
    images: dataProject.images,
    address: dataProject.address,
    date: Date.now(),
    stars: dataProject.stars,
    type: dataProject.type
  }).then(function (res) {
    if (callback && typeof callback === 'function') return callback(null, res);
  }).catch(function (err) {
    console.log(err, 'erorr');
    if (callback && typeof callback === 'function') return callback(err);
  });
};