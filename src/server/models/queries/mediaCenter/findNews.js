const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports =  (type,callback) => {
  mediaCenter.find({type : type})
    .then(res => callback(null, res))
    .catch(err => callback(err)
    );
};
