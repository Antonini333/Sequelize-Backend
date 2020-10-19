const router = require('express').Router();
const OrderController = require('../controllers/orderController');

router.get('/', OrderController.getAll);

//router.post('/', OrderController.create);





module.exports = router;