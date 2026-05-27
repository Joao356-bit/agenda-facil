const express = require('express');

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