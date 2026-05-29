const db = require('../database/database');

exports.listar = (req, res) => {

    const sql =
    'SELECT * FROM profissionais ORDER BY nome';

    db.all(sql, [], (err, profissionais) => {

        if(err){

            return res.status(500).json(err);

        }

        return res.json(profissionais);

    });

};

exports.criar = (req, res) => {

    const {
        nome,
        especialidade,
        telefone
    } = req.body;

    const sql =

    `INSERT INTO profissionais
    (nome,especialidade,telefone)
    VALUES (?,?,?)`;

    db.run(

        sql,

        [
            nome,
            especialidade,
            telefone
        ],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            return res.json({

                success:true,
                id:this.lastID

            });

        }

    );

};

exports.atualizar = (req, res) => {

    const {
        nome,
        especialidade,
        telefone
    } = req.body;

    const sql =

    `UPDATE profissionais
    SET
    nome=?,
    especialidade=?,
    telefone=?
    WHERE id=?`;

    db.run(

        sql,

        [
            nome,
            especialidade,
            telefone,
            req.params.id
        ],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            return res.json({

                success:true

            });

        }

    );

};

exports.excluir = (req, res) => {

    const sql =
    'DELETE FROM profissionais WHERE id=?';

    db.run(

        sql,

        [req.params.id],

        function(err){

            if(err){

                return res.status(500).json(err);

            }

            return res.json({

                success:true

            });

        }

    );

};