const mongoose = require('mongoose')
const Schema = mongoose.Schema

const customerSchema = new Schema({
    username : {
        type : String , 
        required : true,
        trim : true
    },
    phoneNumber : {
        type : Number ,
        required : true , 
        unique : true,
        
    },
   location : {
       type : String , 
       required : true
   },
   email : {
       type : String ,
   },
   password : {
    type : String,
   }
  
    
},
    { timestamps : true }
) 

const Customer = mongoose.model('Customer',customerSchema)
module.exports = Customer