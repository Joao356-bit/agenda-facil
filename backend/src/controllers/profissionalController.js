const db = require('../database/database');

exports.listar = (req, res) => {

<<<<<<< HEAD
    const sql = `
        SELECT
            id,
            nome,
            especialista AS especialidade,
            telefone
        FROM profissionais
    `;

    db.all(sql, [], (err, rows) => {

        if (err) {
=======
    const sql = 'SELECT * FROM profissionais';

    db.all(sql, [], (err, rows) => {

        if(err){
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
            return res.status(500).json(err);
        }

        return res.json(rows);
<<<<<<< HEAD

    });

};

exports.criar = (req, res) => {

    const {
        nome,
        especialidade,
        telefone
    } = req.body;

    const sql = `
        INSERT INTO profissionais
        (
            nome,
            especialista,
            telefone
        )
        VALUES (?, ?, ?)
    `;

    db.run(

        sql,

        [
            nome,
            especialidade,
            telefone
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

exports.editar = (req,res)=>{

    const { id } = req.params;

    const {
        nome,
        especialidade,
        telefone
    } = req.body;

    const sql = `
        UPDATE profissionais
        SET
            nome=?,
            especialista=?,
            telefone=?
        WHERE id=?
    `;

    db.run(

        sql,

        [
            nome,
            especialidade,
            telefone,
            id
        ],

        function(err){

            if(err){

                return res
                .status(500)
                .json(err);

            }

            return res.json({

                success:true,
                message:'Profissional atualizado'

            });

        }

    );

};

exports.excluir = (req,res)=>{

    const { id } = req.params;

    const sql =
    'DELETE FROM profissionais WHERE id=?';

    db.run(

        sql,

        [id],

        function(err){

            if(err){

                return res
                .status(500)
                .json(err);

            }

            return res.json({

                success:true,
                message:'Profissional removido'

            });

        }

    );

};
=======
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
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
