const express = require('express');

const router = express.Router();


const adminProfile = require('./dashboard/adminProfile');
const login = require('./dashboard/login');
const logout = require('./dashboard/logout');
const auth = require('./dashboard/auth');

router.get('/current_user', auth.get);
router.get('/getAdminData', adminProfile.get);
router.post('/updateAdminData', adminProfile.post);
router.post('/login', login.post);
router.get('/logout', logout.get);



module.exports = router;
