const express = require('express');

const router = express.Router();

const agendamentoController =
require('../controllers/agendamentoController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.use(authMiddleware);

// Listar
router.get(
  '/',
  agendamentoController.listar
);

// Criar
router.post(
  '/',
  agendamentoController.criar
);

// Editar
router.put(
  '/:id',
  agendamentoController.editar
);

// Excluir
router.delete(
  '/:id',
  agendamentoController.excluir
);

module.exports = router;