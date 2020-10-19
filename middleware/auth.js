const jwt = require ('jsonwebtoken');
const User = require ('../models/user');

const auth = async (req, res, next) => {
    try{
        const token = req.headers.authorization;
        jwt.verify(token, "agallaselperrocobarde");
        const user = await User.findOne({ where: {token: token} });
        if(!user) {
            return res.status(401).send ({ message: "Go register or login and come back with your token"})
        }
        req.user = user;
        next();
    } catch (error) {
        console.error(error)
        res.status(401).send({ error, message: "Something went wrong in the auth process"})
    }
}

module.exports = auth;