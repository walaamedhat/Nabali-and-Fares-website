const getAllNews = require('../../models/queries/mediaCenter/findNews');
const addNews = require('../../models/queries/mediaCenter/createNews');
const editNews = require('../../models/queries/mediaCenter/updateNews');
const deleteNews = require('../../models/queries/mediaCenter/deleteNews');
const uploadfiles = require('../../helpers/awsHelper')

exports.get = (req, res) => {
  getAllNews((err,result) => {
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

exports.edit = (req, res) => {
  editNews(req.body,(err,result) => {
    if (err) {
      console.log(err,'edit error');
      res.status(500).send(err);
    }
    else {
      console.log(result, ' edit result ');
      res.status(200).send(result);
    }
  })
}


exports.delete = (req, res) => {
  console.log(req.body.id,'req.body.id');
  deleteNews(req.body.id,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send(result);
    }
  })
}
