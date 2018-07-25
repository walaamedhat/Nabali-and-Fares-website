const addComment = require('../models/queries/comments/addComment');
const getComment = require('../models/queries/comments/getComment');


exports.post = (req, res) => {
  addComment(req.body,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(result);
    }
  })
}



exports.get = (req,res) => {
  getComment(req.body.id,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      console.log(result,'resuuuuult');
      res.status(200).send(result);
    }
  })

}
