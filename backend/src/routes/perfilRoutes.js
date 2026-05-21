const express = require('express');

const router = express.Router();

const perfilController = require('../controllers/perfilController');
const authMiddleware = require('../middlewares/authMiddleware');


router.use(authMiddleware);


router.get('/', perfilController.buscar);


router.put('/', perfilController.atualizar);


module.exports = router;