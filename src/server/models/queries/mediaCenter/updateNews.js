const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (newsData,callback) => {
  if ((newsData.newsType && newsData.newsTitle && newsData.newsDescription && newsData.video
    && newsData.secondaryImages && newsData.mainImage) !=='') {
      console.log('hi im in if statement');
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
    }
    else {
      console.log('hi im in else statement');
      mediaCenter.findByIdAndUpdate(newsData._id, {
        $set: {
          name: newsData.newsTitle,
          date: Date.now(),
          type: newsData.newsType,
          discription: newsData.newsDescription,
        },
      },
      { new: true },
      (error, result) => {
        if (error) return callback(error);
      })
        .then(res => callback(null, res))
        .catch(err => callback(err));
    }

};
