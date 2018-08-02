const findAllNews = require('../models/queries/mediaCenter/findNews');


exports.get = (req,res) => {
  console.log(req.params.type,'req.params.newsType');
  switch (req.params.type) {
    case 'lastnews':
      var type = 'خبر'
      break;
    case 'mediainfo':
      var type = 'بيان صحفي'
      break;
    case 'reports':
      var type = 'تقرير سنوي'
      break;
    default:

  }
  findAllNews(type,(err,result) => {
    if (err) {
      console.log(err,'err');
      res.status(500).send(err);
    }
    else {
      console.log(result,'result');
      res.status(200).send({data: result});
    }
  })
}
