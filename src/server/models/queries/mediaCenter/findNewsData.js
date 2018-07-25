const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (id,callback) => {
  mediaCenter.find({_id : id})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
