const mediaCenter = require('../../schemas/mediaCenterSchema');

module.exports = (newsData,callback) => {
  mediaCenter.findByIdAndUpdate(newsData._id, {
    $set: {
      name: newsData.name,
      date: Date.now(),
      type: newsData.type,
      discription: newsData.discription,
      video: newsData.video,
      secondaryImages: newsData.secondaryImages,
      mainImage: newsData.mainImage,
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
  .then(res => callback(null, res))
  .catch(err => callback(err));
};
// module.exports = (newsData,callback) => {
//   console.log(newsData,'newsData newsData');
//   mediaCenter.findByIdAndUpdate(newsData._id, {
//     $set: {
//               name: newsData.name,
//               date: Date.now(),
//               type: newsData.type,
//               discription: newsData.discription,
//               video: newsData.video,
//               secondaryImages: newsData.secondaryImages,
//               mainImage: newsData.mainImage,
//             },
//   },
//   { new: true },
//   (error, result) => {
//     console.log(error,'error');
//     if (error) return callback(error);
//   })
//     .then(result => {
//       console.log(result, 'result');
//       callback(null, result)})
//     .catch(err => {
//       console.log(err,'errrrrrrr');
//       callback(err)});
// };

// module.exports = (newsData,callback) => {
//   if ((newsData.newsType && newsData.newsTitle && newsData.newsDescription && newsData.video
//     && newsData.secondaryImages && newsData.mainImage) !=='') {
//       console.log('hi im in if statement');
//       mediaCenter.findByIdAndUpdate(newsData._id, {
//         $set: {
//           name: newsData.newsTitle,
//           date: Date.now(),
//           type: newsData.newsType,
//           discription: newsData.newsDescription,
//           video: newsData.video,
//           secondaryImages: newsData.secondaryImages,
//           mainImage: newsData.mainImage,
//         },
//       },
//       { new: true },
//       (error, result) => {
//         if (error) return callback(error);
//       })
//         .then(res => callback(null, res))
//         .catch(err => callback(err));
//     }
//     else {
//       console.log('hi im in else statement');
//       mediaCenter.findByIdAndUpdate(newsData._id, {
//         $set: {
//           name: newsData.newsTitle,
//           date: Date.now(),
//           type: newsData.newsType,
//           discription: newsData.newsDescription,
//         },
//       },
//       { new: true },
//       (error, result) => {
//         if (error) return callback(error);
//       })
//         .then(res => callback(null, res))
//         .catch(err => callback(err));
//     }
//
// };
