const ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = (dataProject,callback) => {
  console.log('dataProject', dataProject);
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
      star: dataProject.star,
      [console.log('entered object')]: ''
    },
  },
  { new: true },
  (error, result) => {
    console.log('line 22 erro : ', error);
    if (error) return callback(error);
  })
    .then(res => {
      console.log('line 24: ', res);
      callback(null, res);
    })
    .catch(err => callback(err));
};
