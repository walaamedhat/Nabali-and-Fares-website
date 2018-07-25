const comments = require('../../schemas/commentSchema');



module.exports = (id,callback) => {
  comments.find({news_id : id})
    .then(res => callback(null, res))
    .catch(err => callback(err));
};
