const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    try{
        console.log("hum")
        console.log(req.headers.cookie)
        const token = req.headers.cookie.substring(6)
        
        if(token)console.log(token)
        else console.log("notfound")
        const decode = jwt.verify(token,  'mysecretislove')
        console.log(decode)
        console.log(token)
        next()
    }
    catch(error){
        res.json({status:false,msg: 'Authentication Failed!'})
    }
}

module.exports = authenticate