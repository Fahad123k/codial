// user routes

const express=require('express');
const router= express.Router();

const userController= require('../controller/users_controller');

router.get('/profile',userController.profile);
router.get('/',userController.home);
router.get('/sign-up',userController.signUp);
router.get('/sign-in',userController.signIn);


module.exports=router;