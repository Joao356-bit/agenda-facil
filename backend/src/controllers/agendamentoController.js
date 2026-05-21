const db = require('../database/database');


exports.listar = (req, res) => {

    const sql = `
        SELECT
            agendamentos.*,
            profissionais.nome AS profissional_nome,
            profissionais.especialidade
        FROM agendamentos
        LEFT JOIN profissionais
        ON profissionais.id = agendamentos.profissional_id
    `;

    db.all(sql, [], (err, rows) => {

        if(err){
            return res.status(500).json(err);
        }

        return res.json(rows);
    });
};



exports.criar = (req, res) => {

    const {
        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes
    } = req.body;

    if(
        !cliente ||
        !profissional_id ||
        !servico ||
        !data ||
        !hora
    ){
        return res.status(400).json({
            success: false,
            message: 'Preencha todos os campos obrigatórios'
        });
    }

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
                return res.status(500).json(err);
            }

            return res.status(201).json({
                success: true,
                id: this.lastID,
                message: 'Agendamento criado com sucesso'
            });
        }
    );
};



exports.editar = (req, res) => {

    const { id } = req.params;

    const {
        cliente,
        servico,
        data,
        hora,
        observacoes,
        status
    } = req.body;

    const sql = `
        UPDATE agendamentos
        SET
            cliente = ?,
            servico = ?,
            data = ?,
            hora = ?,
            observacoes = ?,
            status = ?
        WHERE id = ?
    `;

    db.run(
        sql,
        [
            cliente,
            servico,
            data,
            hora,
            observacoes,
            status,
            id
        ],
        function(err){

            if(err){
                return res.status(500).json(err);
            }

            return res.json({
                success: true,
                message: 'Agendamento atualizado'
            });
        }
    );
};



exports.remover = (req, res) => {

    const { id } = req.params;

    const sql = 'DELETE FROM agendamentos WHERE id = ?';

    db.run(sql, [id], function(err){

        if(err){
            return res.status(500).json(err);
        }

        return res.json({
            success: true,
            message: 'Agendamento removido'
        });
    });
};