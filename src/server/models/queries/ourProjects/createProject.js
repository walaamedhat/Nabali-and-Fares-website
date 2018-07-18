const ourProjects = require('../../schemas/ourProjectsSchema');


module.exports = (dataProject, callback) => {
  ourProjects.create({
    name: dataProject.name,
    description: dataProject.description,
    features: dataProject.features,
    typesOfApartments: dataProject.typesOfApartments,
    videoUrl: dataProject.videoUrl,
    image360Url: dataProject.image360Url,
    images: dataProject.images,
    address: dataProject.title,
    date: Date.now(),
    stars: dataProject.starts,
    type: dataProject.type
  }).then((res) => {
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      if (callback && typeof callback === 'function') return callback(err);
    });
};
