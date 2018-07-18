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
  console.log(req.files, ' req.files')
//   console.log(typeof req.body.mainImage , 'req.body.mainImage ')
 uploadfiles(req.files, (err, result)=>{

  if(err) console.log('hey, there is error : ',err)
  else console.log('uploading successfully ....')

 })
  
  
  // addNews(req.body,(err,result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   else {
  //     console.log(result);
  //   }
  // })
}
