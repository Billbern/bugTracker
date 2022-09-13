const jwt = require("jsonwebtoken");

// accessTokens
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "8h"})
}


async function verifyToken(req, res, next){
    //Get request cookie value
    const token = req.cookies.accesstoken;

    console.log(token);
    next();
}


module.exports = { generateAccessToken, verifyToken };