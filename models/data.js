const mongoose = require("mongoose");
const Schema = mongoose.Schema

//creating data schema and model
const itemSchema=new Schema({
    username:{
        type:String,
        required:[true,"username field is required"]
    },
    mobile:{
        type:String,
        required:[true,"mobile field is required"]
    },
    email:{
        type:String,
        required:[true,"email field is required"]
    },
    address:{
        type:String,
        required:[true,"address field is required"]
    }
    

})

const data = mongoose.model('data',itemSchema)

module.exports = data
