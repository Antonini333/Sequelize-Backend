const router = require('express').Router();
const UserController = require ('../controllers/userController');

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

router.get('/profile/:email', UserController.profile);

router.delete('/delete/:email', UserController.delete);



module.exports = router;