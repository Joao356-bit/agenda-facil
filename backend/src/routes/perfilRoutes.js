const express = require('express');

const router = express.Router();

const multer = require('multer');

const path = require('path');

const perfilController =
require('../controllers/perfilController');

const authMiddleware =
require('../middlewares/authMiddleware');

router.use(authMiddleware);

const storage =
multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(
            null,
            'uploads/'
        );

    },

    filename:(req,file,cb)=>{

        cb(

            null,

            Date.now() +
            path.extname(
                file.originalname
            )

        );

    }

});

const upload =
multer({

    storage

});

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

    upload.single('foto'),

    (req,res)=>{

        console.log(req.file);

        if(!req.file){

            return res.status(400).json({

                success:false

            });

        }

        return res.json({

            success:true,

            caminho:
            `uploads/${req.file.filename}`

        });

    }

);

module.exports = router;