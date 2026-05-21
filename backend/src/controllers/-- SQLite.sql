-- SQLite
CREATE TABLE usuarios (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
senha TEXT NOT NULL,
foto TEXT
);

CREATE TABLE profissionais (
id INTEGER PRIMARY KEY AUTOINCREMENT,
nome TEXT NOT NULL,
especialista TEXT NOT NULL,
telefone TEXT
);

CREATE TABLE agendamentos (
id INTEGER PRIMARY KEY AUTOINCREMENT,
cliente TEXT NOT NULL,
profissional_id INTEGER,
servico TEXT NOT NULL,
data TEXT NOT NULL,
hora TEXT NOT NULL,
observacoes TEXT,
status TEXT DEFAULT 'Agendado',
FOREIGN KEY (profissional_id) REFERENCES profissionais(id)
);