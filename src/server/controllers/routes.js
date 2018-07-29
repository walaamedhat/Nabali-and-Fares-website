const express = require('express');
const router = express.Router();

const adminProfile = require('./dashboard/adminProfile');
const login = require('./dashboard/login');
const logout = require('./dashboard/logout');
const auth = require('./dashboard/auth');
const mediaCenter = require('./dashboard/mediaCenter');
const uploadFiles = require('./dashboard/uploadFiles');
const ourProject = require('./dashboard/ourProjects');

const findAllProject = require('./allProject');
const findProject = require('./projectData');
const allNews = require('./allNews');
const newsData = require('./newsData');

const comment = require('./comment');

const contactUs = require('./contactUs');


//////////////// Dashboard Routes
router.post('/login', login.post);
router.get('/current_user', auth.get);
router.get('/logout', logout.get);

/////User Profile Routes
router.get('/getAdminData', adminProfile.get);
router.post('/updateAdminData', adminProfile.post);

///Media Center Routes
router.get('/getNews', mediaCenter.get);
router.post('/addNews', mediaCenter.post);
router.post('/editNews', mediaCenter.edit);
router.post('/deleteNews', mediaCenter.delete);

/////// Project
router.post('/editProject', ourProject.edit);
router.post('/addProject', ourProject.post);
router.post('/deleteProjects', ourProject.delete);

router.post('/upload', uploadFiles.post);
/////////////////Website Routes


router.get('/all/projects', findAllProject.get);
router.get('/stars_project', findAllProject.starProjects);
router.get('/project/:project_id', findProject.get);


router.get('/allnews', allNews.get);
router.get('/post/:news_id', newsData.get);


router.post('/addComment', comment.post);
router.post('/allComment', comment.get);

router.post('/contactUs', contactUs.post);





module.exports = router;
