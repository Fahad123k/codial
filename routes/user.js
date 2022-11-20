const express=require('express');
const router= express.Router();
const passport=require('passport');

const userController= require('../controller/users_controller');

// user home routes
router.get('/',userController.home);
router.get('/profile',userController.profile);
router.get('/sign-up',userController.signUp);
// router.get('/sign-out',userController.SignOut);
router.get('/sign-in',userController.signIn);

// route for the create user by post 
router.post('/create',userController.create)
// it is middleware takes 3 argument use passport as a middleware to autenticae

// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-in'},
), userController.createSession);

module.exports = router;