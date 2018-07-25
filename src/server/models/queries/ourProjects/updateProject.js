const ourProjects = require('../../schemas/ourProjectsSchema');

module.exports = (id,newsData,callback) => {
  ourProjects.findByIdAndUpdate(id, {
    $set: {
      name: dataProject.name,
      description: dataProject.description,
      features: dataProject.features,
      typesOfApartments: dataProject.typesOfApartments,
      videoUrl: dataProject.videoUrl,
      image360Url: dataProject.image360Url,
      images: dataProject.images,
      address: dataProject.title,
      date: Date.now(),
      star: dataProject.star,
      type: dataProject.type
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
};


// query test
// module.exports = (id,newsData,callback) => {
//   ourProjects.findByIdAndUpdate(id, {
//     $set: {
//       images: dataProject.images
//     },
//   },
//   { new: true },
//   (error, result) => {
//     if (error) return callback(error);
//   })
//     .then(res => callback(null, res))
//     .catch(err => callback(err));
// };
