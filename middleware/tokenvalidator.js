const jwt = require('jsonwebtoken');

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    try{
    const token = req.headers?.authorization;
    if (!token) throw new Error (res.status(401).json({ error: 'Acceso denegado' }))
    token = token.split(' ')[1];
        const {UserId} = jwt.verify(token, process.env.SECRET_TOKEN)
        req.UserId = UserId;
        next() 
    } catch (error) {
        return res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;

