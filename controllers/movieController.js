const { Movie, Sequelize } = require('../models');

  const Op = Sequelize.Op;
  
  const MovieController = {

    getAll(req,res){
      Movie.findAll()
        .then(movies => res.send(movies))
        .catch(error => {
          console.error(error);
          res.status(500).send({
            message: 'Something went wrong calling the catalog.'
          })
        })
    },

    getById(req,res){
      Movie.findByPk(req.params.id)
        .then(movie => res.send(movie))
        .catch(error => {
          console.log(error);
          res.status(500).send({
            message: 'Something went wrong searching by Id.'
          })
      })
    },

    getByTitle(req,res){
      Movie.findAll({
        where:{
          title:{
            [Op.like]: `%${req.params.title}%`
          }
        }
      })
        .then(movie => res.send(movie))
        .catch(error => {
          console.log(error);
          res.status(500).send({
            message: 'Something went wrong searching by Title.'
          })
      })
    },

    create(req,res){
      Movie.create(req.body)
        .then(movie => res.send(movie))
        .catch(error => {
          console.log(error);
          res.status(500).send({
            message: 'Something went wrong creating a new movie'
          })
        })
    }
  }
  
  module.exports = MovieController