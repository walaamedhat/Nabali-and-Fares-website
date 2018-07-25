const tape = require('tape');
const Users = require('../src/server/models/schemas/user_schema');
const createUser = require('../src/server/models/queries/user/create_user');
const findUser = require('../src/server/models/queries/user/find_user');
const updateUser = require('../src/server/models/queries/user/update_user');
const deleteUser = require('../src/server/models/queries/deleteAny');


const createProject = require('../src/server/models/queries/ourProjects/createProject');
const updateProject = require('../src/server/models/queries/ourProjects/updateProject');

tape('update project',(t) => {
  const data = {
    images:['http://nabalifares.ps/images/homs/saida.jpg','http://nabalifares.ps/images/homs/arbel.jpg','http://nabalifares.ps/images/homs/fas.jpg','http://nabalifares.ps/images/homs/albet-alandlwse.jpg','http://nabalifares.ps/images/homs/demas.jpg',
            'http://nabalifares.ps/images/homs/saida.jpg','http://nabalifares.ps/images/homs/arbel.jpg','http://nabalifares.ps/images/homs/fas.jpg','http://nabalifares.ps/images/homs/albet-alandlwse.jpg','http://nabalifares.ps/images/homs/demas.jpg'
            ]
  }
  updateProject('5b53b63fc02aa6099d86a904',data,(err,res) => {
    t.equal(res.name, 'مشروع ديماس', 'name should be demas');
    t.end();
  })
})
// tape('adding a new project to the database', (t) => {
//   const data = {
//     name:'مشروع طرابلس',
//     description:'يقدم المشروع مجموعة من الشقق الخلابة بحيث تقدم خيار أسلوب حياة فريد من نوعه وهي تتميز بمساحات واسعة مناسبة تماماً لعشاق الحياة العصرية بحيث توفر الشقق شعوراً عارماً بالحرية ، كما تتميز كل من شقق الطابق العلوي بتراس فسيح وبإطلالة مذهلة على المنطقة المحيطة بها .',
//     features: 'يتصف المشروع بالعديد من المواصفات منها :'+
//                 '1- عزل مائي وحراري للأسطح والجدران .'+
//                 '2- نظام هاتف وستلايت مركزي وانتركم وغاز .'+
//                 '3- مصعد كهربائي عالي السرعة.'+
//                 '4- مواقف داخلية وخارجية واسعة .'+
//                 'ويتميز المشروع بموقعه المتميز بحيث يقع في منطقة تعد احدى المناطق المجتمعية الراقية والجديدة .',
//     typesOfApartments:['شقق روف','شقق شمالية ', 'شقق جنوبية' , 'شقق غربية' , 'شقق شرقية' , 'شقق أرضية '],
//     videoUrl:'https://www.youtube.com/watch?v=e6KY5PHE4EA',
//     image360Url:'http://nabalifares.ps/images/homs/demas.jpg',
//     images:['http://nabalifares.ps/images/homs/tarablos.jpg','https://nabaliandfares.s3.amazonaws.com/mcimages/arch.png'],
//     address:['الطيرة - دوار نبيل عمرو' , ' حي المنارة' , 'رام الله'],
//     stars:false,
//     type:'سكني'
//   };
//   createProject(data, (err, res) => {
//     t.equal(res.name, 'مشروع طرابلس', 'project name should be demas');
//     t.end();
//   });
// });
// tape('adding a new project to the database', (t) => {
//   const data = {
//     name:'مشروع جدة',
//     description:' يقدم مشروع جدة الكائن في منطقة المصايف، أحد أكثر المواقع رواجاً في المدينة. بحيث يتميز هذا المشروع باطلالات جميلة وتصميم معماري فني يلفت الانظار.',
//     features:'ويمتاز العقار كذلك بموقعه القريب من وسط مدينة رام الله وقربه ايضا من مواقع حيوية عدة تكون مصدر جذب للعائلة. الشقق في مشروع جدة توفر لك بلكونتين في كل شقة مما يمنحك فرصة الاستمتاع باكثر من اطلالة.بالاضافة الى وجود تسهيلات مالية وعلى فترات سداد طويلة نسبيا تلبي طموع العديد من المهتمين خصوصا المقبلين على بدء حياة جديدة.',
//     typesOfApartments:['شقق روف','شقق شمالية ', 'شقق جنوبية' , 'شقق غربية' , 'شقق شرقية' , 'شقق أرضية '],
//     videoUrl:'https://www.youtube.com/watch?v=e6KY5PHE4EA',
//     image360Url:'http://nabalifares.ps/images/homs/demas.jpg',
//     images:['http://nabalifares.ps/images/homs/jada.jpg','https://nabaliandfares.s3.amazonaws.com/mcimages/arch.png'],
//     address:[' المصايف - قرب مدرسة الاوائل' , ' حي المنارة' , 'رام الله'],
//     stars:false,
//     type:'سكني'
//   };
//   createProject(data, (err, res) => {
//     t.equal(res.name, 'مشروع جدة', 'project name should be demas');
//     t.end();
//   });
// });
//
// tape('adding a new project to the database', (t) => {
//   const data = {
//     name:'مشروع المنامة',
//     description:'يتكون  المشروع    من  مساحات متباينة من الشقق وبتصاميم مختلفة أيضاً تتناسب مع رغبة الزبائن باختلاف توجهاتهم.',
//     features:'كما أن المشروع يحتوي على نظام Back to Back، وكل شقة في المشروع تتمتع باطلالة مباشرة على الساحل الفلسطيني وتصل مساحة الشقق فيه الي 180مويقع في مكان مطل ومرتفع وقريب من عدة مرافق حيوية',
//     typesOfApartments:['شقق روف','شقق شمالية ', 'شقق جنوبية' , 'شقق غربية' , 'شقق شرقية' , 'شقق أرضية '],
//     videoUrl:'https://www.youtube.com/watch?v=e6KY5PHE4EA',
//     image360Url:'http://nabalifares.ps/images/homs/demas.jpg',
//     images:['http://nabalifares.ps/images/homs/almanama.jpg','https://nabaliandfares.s3.amazonaws.com/mcimages/arch.png'],
//     address:['عين مصباح - قرب جامعة القدس المفتوحة.' , ' حي المنارة' , 'رام الله'],
//     stars:true,
//     type:'سكني'
//   };
//   createProject(data, (err, res) => {
//     t.equal(res.name, 'مشروع المنامة', 'project name should be demas');
//     t.end();
//   });
// });

// tape('dropping the schemas at the start of the test', (t) => {
//   Promise.all([
//     Users.remove({})
//   ]).then(() => {
//     Users.find({}).then((res) => {
//       t.equal(res.length, 0, 'Users schema has been dropped');
//     });
//     t.end();
//   })
//     .catch(err => t.end(err));
// });

// tape('adding a new user to the database', (t) => {
//   const data = {
//       role: 'Admin',
//       name: 'Admin',
//       password: '$2a$10$DnIIOabMGCi13bY5Kedgc.U.WeNUhgweAFHxxJ75ttAsoYDTztL86'
//   };
//   createUser(data, (err, res) => {
//     t.equal(res.role, 'Admin', 'role should be Admin');
//     t.end();
//   });
// });


// tape('find user in database', (t) => {
//   findUser((err,res)=>{
//       console.log(res);
//     t.equal(res.role, 'Admin', 'role should be Admin');
//     t.end();
//   })
//   });

//
// tape('update user',(t) => {
//   const data = {
//     id:'5b49bf150d8f003659ea3d47',
//     role:'User',
//     name: 'mahmoud',
//     email: 'mahmoud@gmail.com',
//     password: '123456'
//   }
//   updateUser(data,(err,res) => {
//     t.equal(res.role, 'User', 'role should be Admin');
//     t.end();
//   })
// })
//
// tape('delete User',(t) => {
//   deleteUser(Users,'5b4ca3a5d877bd655d11d80e', (err,res) => {
//     console.log(res);
//     console.log(err);
//     t.end();
//   })
// })
