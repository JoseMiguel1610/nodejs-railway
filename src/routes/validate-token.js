const jwt = require("jsonwebtoken")
// import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    var tokenBearer = req.headers.authorization.split(" ")[1]
    console.log(tokenBearer);
    if(!tokenBearer) return res.status(401).json({error: 'Acceso denegado'})
    try {
        const verified = jwt.verify(tokenBearer, process.env.TOKEN_SECRET)
        req.user = verified
        next()
    } catch (error){
        res.status(400).json({error: 'Token no valido, acceso denegado'})
    }
}

module.exports = verifyToken;