const mongoose = require('mongoose')
const Schema = mongoose.Schema

const distributorSchema = new Schema({
    username : {
        type : String , 
        trim : true
    },
    phoneNumber : {
        type : Number ,
    },
    location : {
        type :String , 
    },
    placeName : {
        type : String ,
    },
    password : {
        type : String,
    },
    email : {
        type : String, 
    },
    Alneel : {
             type : Number
        },
    Agip: {
            type : Number
    },
    Aman : {
            type : Number
    },
    Sondos : {
        type :Number
    },
    Abarsy : {
        type : Number
    },
    orders :[ {
        id : {type :String},
        name : {type : String},
        amount : {type : Number},
        customer : {type : String}
    }],
    myorders : [{
        id : {type :String},
        name : {type : String},
        amount : {type : Number},
        customer : {type : String},
        date : {type : Date}
    }]
},
    { timestamps : true }
) 

const Distributor = mongoose.model('Distributor',distributorSchema)
module.exports = Distributor