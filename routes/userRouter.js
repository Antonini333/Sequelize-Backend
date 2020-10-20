const router = require('express').Router();
const UserController = require ('../controllers/userController');

router.post('/signup', UserController.signup); //CHECKED
router.post('/login', UserController.login); //CHECKED (new token everytime)

router.get('/profile/:email', UserController.profile); // CHECKED (show password(!!))
router.get('/', UserController.showAll); // CHECKED (should be admin rol)

router.delete('/delete/:email', UserController.delete); //CHECKED



module.exports = router;