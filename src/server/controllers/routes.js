const express = require('express');
const router = express.Router();

const adminProfile = require('./dashboard/adminProfile');
const login = require('./dashboard/login');
const logout = require('./dashboard/logout');
const auth = require('./dashboard/auth');
const mediaCenter = require('./dashboard/mediaCenter');
const uploadFiles = require('./dashboard/uploadFiles');

const findAllProject = require('./allProject');
const allNews = require('./allNews');



//////////////// Dashboard Routes
router.post('/login', login.post);
router.get('/current_user', auth.get);
router.get('/logout', logout.get);

/////User Profile Routes
router.get('/gall/projectsetAdminData', adminProfile.get);
router.post('/updateAdminData', adminProfile.post);

///Media Center Routes
router.get('/getNews', mediaCenter.get);
router.post('/addNews', mediaCenter.post);
router.post('/editNews', mediaCenter.edit);
router.post('/deleteNews', mediaCenter.delete);

router.post('/upload', uploadFiles.post);

/////////////////Website Routes


router.get('/all/projects', findAllProject.get)
router.get('/stars_project', findAllProject.starProjects)


router.get('/allnews', allNews.get)








module.exports = router;
