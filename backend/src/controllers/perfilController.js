const db = require('../database/database');

const bcrypt = require('bcrypt');

const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({

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
            path.extname(file.originalname)

        );

    }

});

const upload =
multer({

    storage

});

exports.uploadMiddleware =
upload.single('foto');

exports.uploadFoto = (req,res)=>{

    console.log(req.file);

    if(!req.file){

        return res.status(400).json({

            success:false,
            message:'Arquivo não enviado'

        });

    }

    return res.json({

        success:true,

        caminho:
        `uploads/${req.file.filename}`

    });

};

exports.buscar = (req, res) => {

    const sql = `

        SELECT
            id,
            nome,
            email,
            foto

        FROM usuarios

        WHERE id = ?

    `;

    db.get(

        sql,

        [req.userId],

        (err, usuario) => {

            if(err){

                return res.status(500).json(err);

            }

            if(!usuario){

                return res.status(404).json({

                    success:false,
                    message:'Usuário não encontrado'

                });

            }

            return res.json(usuario);

        }

    );

};

exports.atualizar = async (req, res) => {

    try{

        const {
            nome,
            email,
            senha,
            foto
        } = req.body;

        let senhaHash = null;

        if(senha){

            senhaHash =
            await bcrypt.hash(

                senha,
                10

            );

        }

        const sql = `

            UPDATE usuarios

            SET

                nome = ?,
                email = ?,
                senha = COALESCE(?, senha),
                foto = COALESCE(?, foto)

            WHERE id = ?

        `;

        db.run(

            sql,

            [
                nome,
                email,
                senhaHash,
                foto || null,
                req.userId
            ],

            function(err){

                if(err){

                    console.log(err);

                    return res.status(500).json(err);

                }

                return res.json({

                    success:true,
                    message:'Perfil atualizado'

                });

            }

        );

    }catch(err){

        console.log(err);

        return res.status(500).json({

            success:false

        });

    }

};