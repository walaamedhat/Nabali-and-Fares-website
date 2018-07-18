const ourProjects = require('../../schemas/ourProjectsSchema');



module.exports = (id, callback) => {
  ourProjects.findByIdAndRemove(id, (err, res) => {
    if (err) return callback(err);
    return callback(null, res);
  });
};
