const router = require('express').Router();
const MovieController = require('../controllers/movieController');


router.get('/', MovieController.getAll); // CHECKED
router.get('/:id', MovieController.getById); //CHECKED
router.get('/title/:title', MovieController.getByTitle); //CHECKED

router.post('/', MovieController.create); //CHECKED

router.delete('/:id', MovieController.deleteMovie); //CHECKED




module.exports = router;