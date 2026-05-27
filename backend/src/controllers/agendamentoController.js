const db = require('../database/database');


// LISTAR
exports.listar = (req, res) => {

    const sql = `
        SELECT
            a.id,
            a.cliente,
            p.nome AS profissional,
            a.profissional_id,
            a.servico,
            a.data,
            a.hora,
            a.observacoes,
            a.status
        FROM agendamentos a
        LEFT JOIN profissionais p
        ON p.id = a.profissional_id
    `;

    db.all(sql, [], (err, rows) => {

        if(err){

            console.log(err);

            return res
            .status(500)
            .json(err);

        }

        return res.json(rows);

    });

};


// CRIAR
exports.criar = (req,res)=>{

    const {

        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes

    } = req.body;

    const sql = `
        INSERT INTO agendamentos
        (
            cliente,
            profissional_id,
            servico,
            data,
            hora,
            observacoes
        )
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.run(

        sql,

        [

            cliente,
            profissional_id,
            servico,
            data,
            hora,
            observacoes

        ],

        function(err){

            if(err){

                console.log(err);

                return res
                .status(500)
                .json(err);

            }

            return res
            .status(201)
            .json({

                success:true,
                id:this.lastID

            });

        }

    );

};


// EDITAR
exports.editar=(req,res)=>{

    const { id } = req.params;

    const {

        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes

    } = req.body;

    const sql = `
        UPDATE agendamentos
        SET
            cliente=?,
            profissional_id=?,
            servico=?,
            data=?,
            hora=?,
            observacoes=?
        WHERE id=?
    `;

    db.run(

        sql,

        [

            cliente,
            profissional_id,
            servico,
            data,
            hora,
            observacoes,
            id

        ],

        function(err){

            if(err){

                console.log(err);

                return res
                .status(500)
                .json(err);

            }

            return res.json({

                success:true,
                message:'Agendamento atualizado'

            });

        }

    );

};


// EXCLUIR
exports.excluir=(req,res)=>{

    const { id } = req.params;

    const sql =
    'DELETE FROM agendamentos WHERE id=?';

    db.run(

        sql,

        [id],

        function(err){

            if(err){

                console.log(err);

                return res
                .status(500)
                .json(err);

            }

            return res.json({

                success:true,
                message:'Agendamento removido'

            });

        }

    );

};