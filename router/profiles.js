const express=require('express')
const router=express.Router();
const profileController=require('../controller/profiles')
router.get('/profiles',profileController.getUsers)
module.exports=router;