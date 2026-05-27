const db = require('../database/database');


<<<<<<< HEAD
// LISTAR
=======
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
exports.listar = (req, res) => {

    const sql = `
        SELECT
<<<<<<< HEAD
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
=======
            agendamentos.*,
            profissionais.nome AS profissional_nome,
            profissionais.especialidade
        FROM agendamentos
        LEFT JOIN profissionais
        ON profissionais.id = agendamentos.profissional_id
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
    `;

    db.all(sql, [], (err, rows) => {

        if(err){
<<<<<<< HEAD

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

=======
            return res.status(500).json(err);
        }

        return res.json(rows);
    });
};



exports.criar = (req, res) => {

    const {
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes
<<<<<<< HEAD

    } = req.body;

=======
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

>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
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
<<<<<<< HEAD

        sql,

        [

=======
        sql,
        [
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
            cliente,
            profissional_id,
            servico,
            data,
            hora,
            observacoes
<<<<<<< HEAD

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
=======
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
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

    const { id } = req.params;

    const {
<<<<<<< HEAD

        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes

=======
        cliente,
        servico,
        data,
        hora,
        observacoes,
        status
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
    } = req.body;

    const sql = `
        UPDATE agendamentos
        SET
<<<<<<< HEAD
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
=======
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
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
            servico,
            data,
            hora,
            observacoes,
<<<<<<< HEAD
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

=======
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
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
};