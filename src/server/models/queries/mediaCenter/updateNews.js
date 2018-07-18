const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (id,newsData,callback) => {
  mediaCenter.findByIdAndUpdate(id, {
    $set: {
      name: newsData.name,
      date: Date.now(),
      type: newsData.type,
      discription: newsData.discription,
      video: newsData.video,
      images: newsData.images,
    },
  },
  { new: true },
  (error, result) => {
    if (error) return callback(error);
  })
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
