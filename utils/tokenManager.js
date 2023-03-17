
const jwt = require('jsonwebtoken');

const generateToken = (UserId) => {

    const expiresIn = 60 * 15;
    try {
        const token = jwt.sign({ UserId }, process.env.SECRET_TOKEN, { expiresIn })
        return ({ token, expiresIn })

    } catch (error) {
        console.log(error);
    }
}




module.exports = generateToken;