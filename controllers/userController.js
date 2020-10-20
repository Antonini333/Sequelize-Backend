const {User} = require ('../models');
const bcrypt = require('bcrypt')
const jwt = require ('jsonwebtoken');

const UserController = {

  showAll(req,res){
    User.findAll()
      .then(users => res.send(users))
      .catch(error => {
        console.error(error);
        res.status(500).send({
          message: 'Something went wrong calling all users.'
        })
      })
  },

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
        res.send({message: `Welcome back ${user.name}`,user});
    }catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Wrong credentials"
        })
    }
},

async profile (req, res) {
    try {
      const user = await User.findAll({
        where: {
          email: req.params.email
        },
        
      attributes: {
        exclude: ['token', 'id']
      }})
        res.status(201).send(user)
    }catch (error) {
      console.error (error)
      res.status (500).send ({error, message: 'There was a problem trying to get information.'})
    }
  },



  delete(req,res) {

    User.destroy({
      where: {
        email: req.params.email
      }
    })
    .then((email) => {
      if (!email) {
        return res.send({
          message: 'Email not found.'
        })
      }
      res.send({
        message: 'Account deleted.'
      })
    })
    .catch(error => {
      console.error(error);
      res.status(500).send({
        message: 'There was a problem trying to delete the account.'
      })
    })
  }


}


module.exports = UserController;