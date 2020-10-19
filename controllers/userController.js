const {User} = require ('../models');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken');

const UserController = {

async signup(req, res){
    try{
        req.body.password = await bcrypt.hash(req.body.password, 9)
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch(error){
        console.error(error);
        res.status(500). send({
            error, message: "Something went wrong creating user"
        })
    }
},

async login (req, res) {
    try {
        const user = await User.findOne({
            where:{
                email: req.body.email
            }
        })
        if(!user) {
            return res.status(400).send({
                message: "Wrong email"
            })
        }
        const token = jwt.sign({id: user.id}, "agallaselperrocobarde", {expiresIn: "30d"})
        console.log(token)
        user.token = token;
        await user.save()
        res.send(user);
    }catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Wrong credentials"
        })
    }
}




}


module.exports = UserController;