const sqlite3 =
require('sqlite3').verbose();

const db =
new sqlite3.Database(

'./src/database/database.db',

(err)=>{

  if(err){

    console.log(
      err.message
    );

  }else{

    console.log(
      'Banco SQLite conectado'
    );

  }

}

);

db.serialize(()=>{

  db.run(`

    CREATE TABLE IF NOT EXISTS usuarios(

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      nome TEXT NOT NULL,

      email TEXT UNIQUE NOT NULL,

      senha TEXT NOT NULL

    )

  `);

  db.run(`

    CREATE TABLE IF NOT EXISTS profissionais(

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      nome TEXT NOT NULL,

      especialidade TEXT NOT NULL,

      telefone TEXT NOT NULL

    )

  `);

  db.run(`

    CREATE TABLE IF NOT EXISTS agendamentos(

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      cliente TEXT NOT NULL,

      data TEXT NOT NULL,

      hora TEXT NOT NULL,

      servico TEXT NOT NULL,

      profissional_id INTEGER NOT NULL,

      observacoes TEXT,

      FOREIGN KEY(profissional_id)
      REFERENCES profissionais(id)

    )

  `);

});

module.exports = db;