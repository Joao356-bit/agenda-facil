const db = require('../database/database');

exports.listar = (req, res) => {

    const sql = 'SELECT * FROM profissionais';

    db.all(sql, [], (err, rows) => {

        if(err){
            return res.status(500).json(err);
        }

        return res.json(rows);
    });
}

exports.criar = (req, res) => {

    const { nome, especialidade, telefone } = req.body;

    const sql = `
        INSERT INTO profissionais
        (nome, especialidade, telefone)
        VALUES (?, ?, ?)
    `;

    db.run(sql, [nome, especialidade, telefone], function(err){

        if(err){
            return res.status(500).json(err);
        }

        return res.status(201).json({
            success: true,
            id: this.lastID
        });
    });
}