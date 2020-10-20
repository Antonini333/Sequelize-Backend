const router = require('express').Router();
const OrderController = require('../controllers/orderController');
const auth = require('../middleware/auth');

router.get('/', OrderController.getAll); //CHECKED 

router.post('/', auth, OrderController.create); //CHECKED





module.exports = router;