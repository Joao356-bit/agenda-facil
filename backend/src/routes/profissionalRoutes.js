const express = require('express');
const router = express.Router();

const profissionalController = require('../controllers/profissionalController');
const authMiddleware = require('../middlewares/authMiddleware');

router.use(authMiddleware);

router.get('/', profissionalController.listar);
router.post('/', profissionalController.criar);

module.exports = router;