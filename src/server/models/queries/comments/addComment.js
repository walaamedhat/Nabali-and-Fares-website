const comments = require('../../schemas/commentSchema');


module.exports = (comment, callback) => {
  comments.create({
    commenter_name : comment.commenter_name,
    email : comment.email,
    comment : comment.comment,
    date : Date.now(),
    news_id : comment.news_id
  }).then((res) => {
    if (callback && typeof callback === 'function') return callback(null, res);
  })
    .catch((err) => {
      if (callback && typeof callback === 'function') return callback(err);
    });
};
