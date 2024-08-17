const express=require('express');
const { Register, Login, ForgotPassword } = require('../controllers/userController');
const router=express.Router();
const verifyToken=require('../middleware/verifyUser')

router.post('/userReg',Register);
router.post('/userLog',Login);
router.post('/forgot',ForgotPassword)


module.exports=router;