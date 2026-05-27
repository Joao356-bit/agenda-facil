const express = require('express');
<<<<<<< HEAD

const router =
express.Router();

const profissionalController =
require('../controllers/profissionalController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get(
    '/',
    profissionalController.listar
);

router.post(
    '/',
    profissionalController.criar
);

router.put(
    '/:id',
    profissionalController.editar
);

router.delete(
    '/:id',
    profissionalController.excluir
);

module.exports =
router;
=======
const router = express.Router();

const profissionalController = require('../controllers/profissionalController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', profissionalController.listar);
router.post('/', profissionalController.criar);

module.exports = router;
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
