'use strict';

var express = require('express');
var router = express.Router();

var adminProfile = require('./dashboard/adminProfile');
var login = require('./dashboard/login');
var logout = require('./dashboard/logout');
var auth = require('./dashboard/auth');
var mediaCenter = require('./dashboard/mediaCenter');
var uploadFiles = require('./dashboard/uploadFiles');
var editProject = require('./dashboard/ourProjects');

var findAllProject = require('./allProject');
var findProject = require('./projectData');
var allNews = require('./allNews');
var newsData = require('./newsData');

var comment = require('./comment');

var contactUs = require('./contactUs');

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

router.post('/upload', uploadFiles.post);
/////// Project
router.post('/editProject', editProject.edit);
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