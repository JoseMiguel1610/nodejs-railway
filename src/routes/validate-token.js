const jwt = require("jsonwebtoken")
// import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    // const token = req.header('auth-token')
    let token = req.headers.authorization
    if (token) {
        var tokenBearer = token.split(" ")[1]
        try {
            const verified = jwt.verify(tokenBearer, process.env.TOKEN_SECRET)
            req.user = verified
            next()
        } catch (error) {
            res.status(400).json({ error: 'Token no valido, acceso denegado' })
        }
    } else {
        return res.status(401).json({ error: 'Acceso denegado' })
    }
}

module.exports = verifyToken;