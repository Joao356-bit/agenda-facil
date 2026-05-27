const express = require('express');
<<<<<<< HEAD

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
=======
const router = express.Router();

const agendamentoController = require('../controllers/agendamentoController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', agendamentoController.listar);
router.post('/', agendamentoController.criar);
router.put('/:id', agendamentoController.editar);
router.delete('/:id', agendamentoController.remover);
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

module.exports = router;