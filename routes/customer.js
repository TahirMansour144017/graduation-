const router = require('express').Router()
let Customer = require('../models/customer.model')
const bcrypt =require('bcrypt')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
const config = require('config')

// get a list of all the customers
router.route('/').get( (req,res) => {
  
    Customer.find()
    .then( cus => res.json(cus))
    .catch(err => res.status(400).json('Error :' + err ))

} )

// register Customers
router.route('/add').post((req,res) => {
  
    const username = req.body.username
    const phoneNumber = req.body.phoneNumber
    const location = req.body.location
    const password = req.body.password
    const email = req.body.email

    //Simple Validation 
    if(!username || ! phoneNumber || !location || !password ||!email)
    {return res.status(400).json('please fill out all the feilds')}

    // checking for email's uniqness
    Customer.findOne({email})
    .then(user => {
      if(user){return res.status(400).json('sorry, this email already exists')}
    })
    //otherwise save a new usermodel
    const newCustomer = new Customer({
      username,
      phoneNumber,
      location,
      password,
      email
    })

    //generate hash and sault for the password
    bcrypt.genSalt(10 , (err , salt) => {
      if(err) throw err
      bcrypt.hash(newCustomer.password , salt ,(err , hash) => {
        if(err) throw err
        newCustomer.password = hash
        newCustomer.save()
        .then(user => {
          jwt.sign(
            {id : user.id} ,
            config.get('jwtSecret'),
            {expiresIn :3600},
            (err , token) => {
              if(err) throw err
              res.json({
                token,
                user : {
                  id : user.id ,
                  email : user.email ,
                  name : user.username,
                  type : false
                }
              })
            }

          )
        })
      })
    })
  
} )

module.exports = router  