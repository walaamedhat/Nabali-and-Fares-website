const mediaCenter = require('../../schemas/mediaCenterSchema');


module.exports = (id, callback) => {
  mediaCenter.findByIdAndRemove(id, (err, res) => {
    if (err) return callback(err);
    return callback(null, res);
  });
};
