const express =require('express');
const router= express.Router();
const HomeController= require('../controller/home_controller')

console.log("Router get loaded");

router.get('/',HomeController.home)
router.get('/para',HomeController.para)
router.get('/test',HomeController.test)
module.exports=router;