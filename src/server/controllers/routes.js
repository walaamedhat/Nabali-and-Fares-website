const express = require('express');

const router = express.Router();


const adminProfile = require('./dashboard/adminProfile');
const login = require('./dashboard/login');
const logout = require('./dashboard/logout');
const auth = require('./dashboard/auth');
const mediaCenter = require('./dashboard/mediaCenter');
const uploadFiles = require('./dashboard/uploadFiles');



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

module.exports = router;
