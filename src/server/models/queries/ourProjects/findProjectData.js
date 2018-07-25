const ourProjects = require('../../schemas/ourProjectsSchema');


module.exports = (id,callback) => {
  ourProjects.find({_id : id})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
