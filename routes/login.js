const express=require("express")
const router=express.Router();
const jwt=require('jsonwebtoken');



router.get("/",(req,res)=>{
    res.status(400).send({auth:false,msg:"couldn't get it"});
    
})

router.post("/",(req,res)=>{
    if(req.body.password&&req.body.email){
        if(req.body.email=="admin@namasys.co"&&req.body.password=="admin123"){
            console.log("success");
            var token=jwt.sign({"id":req.body.email},"mysecretislove");
            res.cookie('token',token,{maxAge:1000*60*5});
            res.status(200).send({ auth: true, token: token });

        }
        else{
            res.status(400).send({auth:false,msg:"invalid credentials"});
        }
    }else{
        res.status(400).send({auth:false,msg:"invalid credentials"});
    }
    
})

module.exports=router