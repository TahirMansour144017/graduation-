const config = require('config')
const jwt = require('jsonwebtoken')

function auth(req , res , next) {
    const token = req.header('authorize')
    //check for token
    if(!token) return res.status(401).json('no token , authorization denied')
    try {
    //verify token
        const decoded = jwt.verify(token , config.get('jwtSecret'))
        req.user = decoded
        next()
    }catch(e){
        res.status(400).json('token in not valid')
    }
    
}

module.exports = auth;