const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const authController =
require('../controllers/authController');

router.post(
    '/register',
    authController.register
);

router.post(
    '/login',
    authController.login
);
=======
const authController = require('../controllers/authController');

router.post('/login', authController.login);
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

module.exports = router;