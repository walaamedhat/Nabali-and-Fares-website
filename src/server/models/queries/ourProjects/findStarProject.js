const ourProjects = require('../../schemas/ourProjectsSchema');


module.exports = callback => {
  ourProjects.find({star : true})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
