const findAllNews = require('../models/queries/mediaCenter/findNews');






exports.get = (req,res) => {
  findAllNews((err,result) => {
    if (err) {
      res.status(500).send(err);
    }
    else {
      res.status(200).send({data: result});
    }
  })
}
