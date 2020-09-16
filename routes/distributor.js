const router = require('express').Router()
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../middleware/auth')
let Distributor = require('../models/distributor.model')

router.route('/').get( (req,res) => {
    Distributor.find()
    .then( dis => res.json(dis))
    .catch(err => res.status(400).json('Error :' + err ))
} )

// for customers to order cylinders from their profile.
router.route('/order').post((req , res) => {
    const { email ,orders} = req.body
    Distributor.findOne({email})
    .then( user => {
        user.orders = [...user.orders,req.body.orders]
        user.save()
        res.json(user)
    }) .catch(
        err => res.status(400).json(err)
    )
})
router.route('/myorder').post((req , res) => {
    const { email , myorders} = req.body
    Distributor.findOne({email})
    .then( user => {
        user.myorders = [...user.myorders,req.body.myorders]
        user.save()
        res.json(user)
    }) .catch(
        err => res.status(400).json(err)
    )
})
// this route saves the order from the myorders into the orders. 
//and it should turn the order status to pending
router.route('/middle').post(auth , (req , res) => {
    const { email , myorders} = req.body
    Distributor.findById(req.user.id)
    .then( user => {
        user.orders = [...user.orders , req.body.myorders]
        user.save()
        res.json(user)
    }) .catch(
        err => res.status(400).json(err)
    )
})


// this one should delete the order
router.route('/delorder').post(auth ,(req , res) => {
    const { email ,orders , id} = req.body
    Distributor.findById(req.user.id)  
      .then( user => {
        user.myorders.splice(user.myorders.indexOf(req.body.id) ,1)
        user.save()
        res.json(user)
    }) .catch(
        err => res.status(400).json(err)
    )
})


// adding a distributor to the database 
router.route('/add').post(  (req,res) => {
   
    const username     =   req.body.username
    const phoneNumber  =   req.body.phoneNumber
    const location     =   req.body.location
    const placeName    =   req.body.placeName
    const password     =   req.body.password
    const email        =   req.body.email
    const Alneel       =   req.body.Alneel
    const Aman         =   req.body.Aman
    const Sondos         =   req.body.Sondos
    const Abarsy         =   req.body.Abarsy
    const Agip         =   req.body.Agip
    const orders       =    req.body.orders
    const myorders       =    req.body.myorders
    

    // const { username , phoneNumber , location , placeName , password , email } = req.body

    // Requiring all fields
   
    if (!username || !password || !email || !phoneNumber || !location | !placeName){
        return res.status(400).json("please fill up all fields")
    }

    // checking for username validation by email
   
    Distributor.findOne({email})
    .then( user => {
       if(user) return res.status(400).json("Sorry, this email already exists")
    })
    
    const newDistributor = new Distributor({
      username,
      phoneNumber,
      location,
      placeName,
      password,
      email,
      Alneel,
      Aman,
      Agip,
      Abarsy,
      Sondos,
      orders,
      myorders
   })

   // create sault and hash
   bcrypt.genSalt(10 , (err ,salt) => {
       bcrypt.hash(newDistributor.password , salt , (err,hash) => {
           if(err) throw err
             newDistributor.password = hash
               newDistributor.save()
                 .then((user)=> {
                     jwt.sign(
                         {id : user.id},
                         config.get('jwtSecret'),
                         {expiresIn : 3600},
                         (err ,token) => {
                            if (err) throw err
                             res.json({
                                 token,
                                 user : {
                                    id :user.id,
                                    name : user.username,
                                    email : user.email,
                                    alneel : user.Alneel,
                                    agip: user.Agip,
                                    aman : user.Aman,
                                    abrsy : user.Abarsy,
                                    sondos : user.Sondos,
                                    type : true
                                },
                                
                            })
                         }
                     )
                 })
                 .catch(err => res.status(400).json('Error :' + err ))
})
              } )
})

                                        /////////////////////////////////////////
// Updating Username

router.route('/updateusername').post( auth ,
    (req , res) => {
        Distributor.findById(req.user.id)
        .then( 
            (user) => {
                user.username = req.body.username
                user.save()
                .then( () => res.json("username updated"))
                .catch(err => res.status(400).json('Error :' + err ))
            }
        )

    }
)

                                        //////////////////////////////////////////

//updating cylinder types

    //alneel
    router.route('/upAlneel').post( auth ,
        (req , res) => {
            Distributor.findById(req.user.id)
            .then( 
                (user) => {
                    user.Alneel = req.body.Alneel
                    user.save()
                    .then( () => res.json("cylinder updated"))
                    .catch(err => res.status(400).json('Error :' + err ))
                }
            )

        }
    )
                //aman
                router.route('/upAman').post( auth ,
                    (req , res) => {
                        Distributor.findById(req.user.id)
                        .then( 
                            (user) => {
                                user.Aman = req.body.Aman
                                user.save()
                                .then( () => res.json("aman updated"))
                                .catch(err => res.status(400).json('Error :' + err ))
                            }
                        )

                    }
                )
                                    //sondos
                                    router.route('/upSondos').post( auth ,
                                        (req , res) => {
                                            Distributor.findById(req.user.id)
                                            .then( 
                                                (user) => {
                                                    user.Sondos = req.body.Sondos
                                                    user.save()
                                                    .then( () => res.json("sondos updated"))
                                                    .catch(err => res.status(400).json('Error :' + err ))
                                                }
                                            )

                                        }
                                    )
                                                                //agip
                                                                router.route('/upAgip').post( auth ,
                                                                    (req , res) => {
                                                                        Distributor.findById(req.user.id)
                                                                        .then( 
                                                                            (user) => {
                                                                                user.Agip = req.body.Agip
                                                                                user.save()
                                                                                .then( () => res.json("agip updated"))
                                                                                .catch(err => res.status(400).json('Error :' + err ))
                                                                            }
                                                                        )

                                                                    }
                                                                )
                            //abarsy
                            router.route('/upAbarsy').post( auth ,
                                (req , res) => {
                                    Distributor.findById(req.user.id)
                                    .then( 
                                        (user) => {
                                            user.Abarsy = req.body.Abarsy
                                            user.save()
                                            .then( () => res.json(" updated"))
                                            .catch(err => res.status(400).json('Error :' + err ))
                                        }
                                    )

                                }
                            )

                                        //////////////////////////////////////////
                                        //////////////////////////////////////////
                                        //////////////////////////////////////////
                                        //////////////////////////////////////////

// Subtracting and Adding cylinder amounts for orders 
//Alneel
router.route('/orderneel').post(
    auth ,(req,res) => {
        Distributor.findById(req.user.id)
        .then( user =>{
            user.Alneel = user.Alneel - req.body.Alneel
            user.save()
            .then(res.json( user))
        })
    }
)
router.route('/addorderneel').post(
    auth ,(req,res) => {
        Distributor.findById(req.user.id)
        .then( user =>{
            user.Alneel = (parseInt(user.Alneel , 10) + parseInt(req.body.Alneel, 10))
            user.save()
            .then(res.json( user))
        })
    }
)
///////////////aman
                    router.route('/orderaman').post(
                        auth ,(req,res) => {
                            Distributor.findById(req.user.id)
                            .then( user =>{
                                user.Aman = (parseInt(user.Aman) - parseInt(req.body.Aman))
                                user.save()
                                .then(res.json( user))
                            })
                        }
                    )
                    router.route('/addorderaman').post(
                        auth ,(req,res) => {
                            Distributor.findById(req.user.id)
                            .then( user =>{
                                user.Aman = (parseInt(user.Aman , 10) + parseInt(req.body.Aman, 10))
                                user.save()
                                .then(res.json( user))
                            })
                        }
                    )
////////////////////////////////////////////Sondos
                                            router.route('/ordersondos').post(
                                                auth ,(req,res) => {
                                                    Distributor.findById(req.user.id)
                                                    .then( user =>{
                                                        user.Sondos = user.Sondos - req.body.Sondos
                                                        user.save()
                                                        .then(res.json(user))
                                                    })
                                                }
                                            )
                                            router.route('/addordersondos').post(
                                                auth ,(req,res) => {
                                                    Distributor.findById(req.user.id)
                                                    .then( user =>{
                                                        user.Sondos = (parseInt(user.Sondos , 10) + parseInt(req.body.Sondos, 10))
                                                        user.save()
                                                        .then(res.json( user))
                                                    })
                                                }
                                            )
//////////////////////////////////////////////////////////////////////////////////Agip
                                                                        router.route('/orderagip').post(
                                                                            auth ,(req,res) => {
                                                                                Distributor.findById(req.user.id)
                                                                                .then( user =>{
                                                                                    user.Agip = user.Agip - req.body.Agip
                                                                                    user.save()
                                                                                    .then(res.json( user))
                                                                                })
                                                                            }
                                                                        )
                                                                        router.route('/addorderagip').post(
                                                                            auth ,(req,res) => {
                                                                                Distributor.findById(req.user.id)
                                                                                .then( user =>{
                                                                                    user.Agip = (parseInt(user.Agip , 10) + parseInt(req.body.Agip, 10))
                                                                                    user.save()
                                                                                    .then(res.json( user))
                                                                                })
                                                                            }
                                                                        )
//////////////////////////////////////////////////////////////////////////////////Abarsy
 router.route('/orderabarsy').post(
auth ,(req,res) => {
Distributor.findById(req.user.id)
.then( user =>{
user.Abarsy = user.Abarsy - req.body.Abarsy
user.save()
.then(res.json( user))
})
}
)
router.route('/addorderabarsy').post(
auth ,(req,res) => {
Distributor.findById(req.user.id)
.then( user =>{
user.Abarsy = (parseInt(user.Abarsy , 10) + parseInt(req.body.Abarsy, 10))
user.save()
.then(res.json( user))
})
}
)
                                            // END OF ADDING AND SUBTRACTING
                                        //////////////////////////////////////////
                                        //////////////////////////////////////////
                                        //////////////////////////////////////////
                                        //////////////////////////////////////////


module.exports = router