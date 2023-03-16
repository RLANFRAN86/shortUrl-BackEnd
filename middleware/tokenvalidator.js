const jwt = require('jsonwebtoken');

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const {uid} = jwt.verify(token, process.env.SECRET_TOKEN)
        req.uid = uid;
        next() 
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}



module.exports = verifyToken;