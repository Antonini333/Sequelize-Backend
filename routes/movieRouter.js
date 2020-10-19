const router = require('express').Router();
const MovieController = require('../controllers/movieController');


router.get('/', MovieController.getAll);
router.get('/:id', MovieController.getById);
router.get('/title/:title', MovieController.getByTitle);

router.post('/', MovieController.create);
//router.delete('/:id', MovieController.delete);




module.exports = router;