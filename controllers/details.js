const data=require("../models/data")

const getall=(req,res,next)=>{
    data.find({}).then(function(items){
        res.send({status:true,msg:items});
    }).catch((err)=>{
        res.send({status:false,msg:err.message})
    });
};

const adddata=(req,res,next)=>{
    console.log(req.body)
    data.create(req.body).then(function(item){
        res.send({status:true,msg:item});
    }).catch((err)=>{
        res.send({status:false,msg:err.message})
    })
}

const deletedata=(req,res,next)=>{
    
    data.findByIdAndRemove({_id:req.body.id}).then((item)=>{
        res.send({status:true,msg:item});
    }).catch((err)=>{
        res.send({"status":false,msg:err.message})
    })
}


module.exports={
    getall,
    adddata,
    deletedata
}

