const express = require('express');

const router = express.Router();

const agendamentoController =
require('../controllers/agendamentoController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get(

'/',

agendamentoController.listar

);

router.post(

'/',

agendamentoController.criar

);

router.put(

'/:id',

agendamentoController.atualizar

);

router.delete(

'/:id',

agendamentoController.excluir

);

module.exports = router;