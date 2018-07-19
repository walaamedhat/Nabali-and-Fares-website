const getAllNews = require('../../models/queries/mediaCenter/findNews');
const addNews = require('../../models/queries/mediaCenter/createNews');
const uploadfiles = require('../../helpers/awsHelper')

exports.get = (req, res) => {
  getAllNews(err,result => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}



exports.post = (req, res) => {
  addNews(req.body,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(result);
    }
  })
}
