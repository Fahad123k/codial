// user routes

const express=require('express');
const router= express.Router();

const userController= require('../controller/users_controller');

// user home routes
router.get('/',userController.home);
router.get('/profile',userController.profile);
router.get('/sign-up',userController.signUp);
router.get('/sign-out',userController.SignOut);
router.get('/sign-in',userController.signIn);

// route for the create user by post 
router.post('/create',userController.create)
router.post('/create-session',userController.createSession)

module.exports=router;