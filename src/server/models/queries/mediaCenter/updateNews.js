const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (newsData,callback) => {
  mediaCenter.findByIdAndUpdate(newsData._id, {
    $set: {
      name: newsData.newsTitle,
      date: Date.now(),
      type: newsData.newsType,
      discription: newsData.newsDescription,
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
