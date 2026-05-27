const express = require('express');
const multer = require('multer');

const router = express.Router();

const perfilController =
require('../controllers/perfilController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.use(authMiddleware);


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

module.exports = router;