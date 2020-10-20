const router = require('express').Router();
const UserController = require ('../controllers/userController');

router.post('/signup', UserController.signup); //CHECK
router.post('/login', UserController.login); //CHECK genera nuevo token cada vez

router.get('/profile/:email', UserController.profile); //enseña el password
router.get('/', UserController.showAll);

router.delete('/delete/:email', UserController.delete);



module.exports = router;