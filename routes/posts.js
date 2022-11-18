// posts routes
const express=require('express');
const router=express.Router();

const postController=require('../controller/posts_controller');


router.get('/',postController.home);
router.get('/post',postController.post);

module.exports=router;