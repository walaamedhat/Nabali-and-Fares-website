const findNews = require('../models/queries/mediaCenter/findNewsData');


exports.get = (req,res) => {
  findNews(req.params.news_id,(err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}
