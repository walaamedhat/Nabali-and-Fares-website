'use strict';

var mediaCenter = require('../../schemas/mediaCenterSchema');

module.exports = function (newsData, callback) {
  mediaCenter.create({
    name: newsData.newsTitle,
    date: Date.now(),
    type: newsData.newsType,
    discription: newsData.newsDescription,
    video: newsData.video,
    secondaryImages: newsData.secondaryImages,
    mainImage: newsData.mainImage
  }).then(function (res) {
    if (callback && typeof callback === 'function') return callback(null, res);
  }).catch(function (err) {
    if (callback && typeof callback === 'function') return callback(err);
  });
};