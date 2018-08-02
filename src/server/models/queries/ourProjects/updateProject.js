const ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = (dataProject,callback) => {
  ourProjects.findByIdAndUpdate(dataProject._id, {
    $set: {
      name: dataProject.name,
      description: dataProject.description,
      features: dataProject.features,
      typesOfApartments: dataProject.typesOfApartments,
      videoUrl: dataProject.videoUrl,
      image360Url: dataProject.image360Url,
      images: dataProject.images,
      address: [dataProject.street,dataProject.district,dataProject.city],
      date: Date.now(),
      star: dataProject.star
    },
  },
  { new: true },
  (error, result) => {
    console.log(error,'error updateProject');
    console.log(result,'result updateProject');
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err =>(console.error(err,'error updateProject catch'))
    callback(err)
  );
};
