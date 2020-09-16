const router = require('express').Router()
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
let Distributor = require('../models/distributor.model')
const Customer = require('../models/customer.model')

router.route('/').get( (req,res) => {
    Distributor.find()
    .select('-password')
    .then( dis => res.json(dis))
    .catch(err => res.status(400).json('Error :' + err ))
} )

//getting users with the tokens

router.route('/users').get(auth ,(req , res) => {
    Distributor.findById(req.user.id)
    .then(
        distributor => {
                          if(!distributor){
                              Customer.findById(req.user.id)
                                     .then(customer => res.json(customer))
                                            } else return res.json(distributor)
                                                                             }   )
} )


// User authentication
router.route('/add').post( (req,res) => {
   
    const { email , password } = req.body

    // const { username , phoneNumber , location , placeName , password , email } = req.body

    //  Requiring all fields
       
    if (!password || !email){
        return res.status(400).json("please fill out all fields")
    }

    // checking for username validation by email
   
    Distributor.findOne({email})
    .then( user => {
                     if(!user){
                           Customer.findOne({email})
                                         .then(
                       (user) => {
                           if(!user) return res.status(400).json("Sorry, this user does not exist , please check email")
                           bcrypt.compare(password , user.password)
                           .then(ismatch => {
                               if(!ismatch)  return res.status(400).json("invalid password") 
                               jwt.sign(
                                   {id : user.id},
                                   config.get('jwtSecret'),
                                   {expiresIn : 3600},
                                   (err , token) => {
                                       if(err) throw err
                                       res.json({
                                           token,
                                           id : user.id,
                                           email : user.email,
                                           msg : "customer ended here",
                                           type : false
               
                                       })
                                   }
                               )
                           })
                                 } )
       }else{
        return(
       // validate password 
            bcrypt.compare(password , user.password)
            .then(ismatch => {
                if(!ismatch)  return res.status(400).json("invalid password") 
                jwt.sign(
                    {id : user.id},
                    config.get('jwtSecret'),
                    {expiresIn : 3600},
                    (err , token) => {
                        if(err) throw err
                        res.json({
                            token,
                            id : user.id,
                            email : user.email,
                             msg : "distributor ended here",
                             type :true

                        })
                    }
                )
            }) )}
      } )
})


module.exports = router