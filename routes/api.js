const express=require("express")
const router=express.Router();
const data=require("../models/data")
const jwt=require('jsonwebtoken')
const dataController=require("../controllers/details")
const authenticate = require('../middleware/auth')


router.get("/",authenticate,dataController.getall);



router.post("/",authenticate,dataController.adddata);

router.delete("/",authenticate,dataController.deletedata);

module.exports=router