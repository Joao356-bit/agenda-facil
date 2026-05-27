const db = require('../database/database');

exports.resumo = (req, res) => {

    const resposta = {};

    db.get(

        'SELECT COUNT(*) as total FROM agendamentos',

        [],

        (err, agendamentos)=>{

            if(err){

                return res
                .status(500)
                .json(err);

            }

            resposta.totalAgendamentos =
            agendamentos.total;

            db.get(

                'SELECT COUNT(*) as total FROM profissionais',

                [],

                (err, profissionais)=>{

                    if(err){

                        return res
                        .status(500)
                        .json(err);

                    }

                    resposta.totalProfissionais =
                    profissionais.total;

                    db.all(

                        `
                        SELECT
                            a.id,
                            a.cliente,
                            a.hora,
                            p.nome AS profissional
                        FROM agendamentos a
                        LEFT JOIN profissionais p
                        ON p.id=a.profissional_id
                        ORDER BY a.id DESC
                        LIMIT 5
                        `,

                        [],

                        (err,recentes)=>{

                            if(err){

                                return res
                                .status(500)
                                .json(err);

                            }

                            resposta.recentes =
                            recentes;

                            return res.json(
                                resposta
                            );

                        }

                    );

                }

            );

        }

    );

};