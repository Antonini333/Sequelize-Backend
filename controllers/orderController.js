const { Order, Movie, User } = require('../models');

const OrderController = {

    async getAll(req, res) {
        try{
            const orders = await Order.findAll({
                attributes: {
                    exclude: ['UserId']
                },
                include: [{
                    model: Movie,
                    attributes: ['title'],
                    through: {
                        attributes: []
                    }
                }, {
                    model: User,
                    attributes: ['name', 'email']
                }]
            });
            res.send(orders);

        } catch (error) {
            console.error(error);
            res.status(500).send({
                error,
                message: 'Something went wrong calling orders'
            })
        }
    },

    async create (req, res) {
        try {
            const returnDate = new Date();
            returnDate.setDate(returnDate.getDate() + 4)
            const order = await Order.create({
                status: 'Rented',
                returnDate,
                UserId: req.user.id,
                
            });  
            order.addMovie(req.body.movies)              
                res.send({
                    message: 'Order successfully completed', order
                })
            
        } catch (error) {
            console.error(error);
            res.status(500).send({
                message: 'Something went wrong with your order'
            })
        }
    }
}

module.exports = OrderController;