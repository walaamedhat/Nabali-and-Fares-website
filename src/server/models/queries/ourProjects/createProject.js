const ourProjects = require('../../schemas/ourProjectsSchema');


module.exports = (dataProject, callback) => {
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
    star: dataProject.star
  }).then((res) => {
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      console.log(err , 'erorr');
      if (callback && typeof callback === 'function') return callback(err);
    });
};
