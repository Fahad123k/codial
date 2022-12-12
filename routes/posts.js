// posts routes
const express=require('express');
const router=express.Router();

const passport= require('passport')
const postController=require('../controller/posts_controller');


router.post('/create',passport.checkAuthentication,postController.create);
// router.get('/post',postController.post);

module.exports=router;