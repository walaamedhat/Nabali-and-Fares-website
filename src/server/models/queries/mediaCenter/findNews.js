const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports =  callback => {
  mediaCenter.find()
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
