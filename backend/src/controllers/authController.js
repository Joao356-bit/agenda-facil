const db = require('../database/database');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');

exports.login = (req, res) => {

    const { email, senha } = req.body;

    if(!email || !senha){
        return res.status(400).json({
            success: false,
            message: 'Preencha email e senha'
        });
    }

    const sql = 'SELECT * FROM usuarios WHERE email = ?';
     db.get(sql, [email], async (err, usuario) => {

        if(err){
            return res.status(500).json(err);
        }

        if(!usuario){
            return res.status(404).json({
                success: false,
                message: 'Usuário não encontrado'
            });
        }

        const senhaValida = await bcrypt.compare(senha, usuario.senha);

        if(!senhaValida){  return res.status(401).json({
                success: false,
                message: 'Senha inválida'
            });
        }

        const token = jwt.sign(
            { id: usuario.id },
            jwtConfig.secret,
            { expiresIn: '1d' }
        );

        return res.json({
            success: true,
            token
        });
    });
}