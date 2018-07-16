const user = require('./models/schemas/user_schema');
const ourProjects = require('./models/schemas/ourProjectsSchema');
const mediaCenter = require('./models/schemas/mediaCenterSchema');
const comment = require('./models/schemas/commentSchema');
const apartment = require('./models/schemas/apartmentSchema');


const build = () => {
  ourProjects.create({});
  user.create({});
  mediaCenter.create({});
  comment.create({});
  apartment.create({});

}



module.exports = build;
