const express = require('express');
<<<<<<< HEAD
const multer = require('multer');

const router = express.Router();

const perfilController =
require('../controllers/perfilController');

const authMiddleware =
require('../middlewares/authMiddleware');
=======

const router = express.Router();

const perfilController = require('../controllers/perfilController');
const authMiddleware = require('../middlewares/authMiddleware');

>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

router.use(authMiddleware);


<<<<<<< HEAD
// Configuração upload

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(
            null,
            'uploads/'
        );

    },

    filename:(req,file,cb)=>{

        const nome=

        Date.now()

        +

        '-'

        +

        file.originalname;

        cb(
            null,
            nome
        );

    }

});

const upload =
multer({
    storage
});


// ROTAS

router.get(
'/',
perfilController.buscar
);

router.put(
'/',
perfilController.atualizar
);

router.post(

'/foto',

upload.single(
'foto'
),

perfilController.uploadFoto

);
=======
router.get('/', perfilController.buscar);


router.put('/', perfilController.atualizar);

>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

module.exports = router;