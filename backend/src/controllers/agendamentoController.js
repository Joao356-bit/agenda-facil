const db = require('../database/database');

exports.listar = (req, res) => {

    const sql = `

        SELECT
            agendamentos.id,
            agendamentos.cliente,
            agendamentos.data,
            agendamentos.hora,
            agendamentos.servico,
            profissionais.nome AS profissional

        FROM agendamentos

        LEFT JOIN profissionais
        ON profissionais.id =
        agendamentos.profissional_id

        ORDER BY agendamentos.data DESC

    `;

    db.all(

        sql,

        [],

        (err, agendamentos) => {

            if(err){

                return res.status(500).json(err);

            }

            return res.json(agendamentos);

        }

    );

};

exports.criar = (req, res) => {

    const {

        cliente,
        data,
        hora,
        servico,
        profissional_id

    } = req.body;

    const sql = `

        INSERT INTO agendamentos
        (
            cliente,
            data,
            hora,
            servico,
            profissional_id
        )

        VALUES (?,?,?,?,?)

    `;

    db.run(

        sql,

        [

            cliente,
            data,
            hora,
            servico,
            profissional_id

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

        cliente,
        data,
        hora,
        servico,
        profissional_id

    } = req.body;

    const sql = `

        UPDATE agendamentos

        SET

            cliente = ?,
            data = ?,
            hora = ?,
            servico = ?,
            profissional_id = ?

        WHERE id = ?

    `;

    db.run(

        sql,

        [

            cliente,
            data,
            hora,
            servico,
            profissional_id,
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
    'DELETE FROM agendamentos WHERE id = ?';

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