const express = require('express');

const router = express.Router();


const adminProfile = require('./dashboard/adminProfile')
const login = require('./dashboard/login')

router.get('/getAdminData/:id', adminProfile.get);
// router.post('/updateAdminData', adminProfile.post);
router.post('/login', login.post);



module.exports = router;
