const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (newsData, callback) => {
  mediaCenter.create({
    name: newsData.name,
    date: Date.now(),
    type: newsData.type,
    discription: newsData.discription,
    video: newsData.video,
    images: newsData.images,
  }).then((res) => {
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      if (callback && typeof callback === 'function') return callback(err);
    });
};
