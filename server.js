const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const config = require('config')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

 const db = config.get('ATLAS_URI')

mongoose.connect(db ,{ useNewUrlParser : true , useCreateIndex : true , useUnifiedTopology: true} )

const connection = mongoose.connection
connection.once('open' , () => {console.log("MongoDB connection established succesfully AlhamduliAllah ")} )

const customerRouter = require('./routes/customer')
const distributorRouter = require('./routes/distributor')
const authrouter = require('./routes/auth')


app.use('/customer' , customerRouter)
app.use('/distributor' , distributorRouter)
app.use('/auth', authrouter)


app.listen( port, () => {
    console.log(`server is running on port ${port}`)
})