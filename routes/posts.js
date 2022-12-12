// posts routes
const express=require('express');
const router=express.Router();

const postController=require('../controller/posts_controller');


router.post('/create',postController.create);
// router.get('/post',postController.post);

module.exports=router;