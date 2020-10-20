const router = require('express').Router();
const MovieController = require('../controllers/movieController');


router.get('/', MovieController.getAll); // CHECK
router.get('/:id', MovieController.getById); //CHECK
router.get('/title/:title', MovieController.getByTitle); //CHECK

router.post('/', MovieController.create); //CHECK
router.delete('/:id', MovieController.deleteMovie); //CHECK




module.exports = router;