const express = require('express');

const cors = require('cors');

const path = require('path');

const authRoutes =
require('./src/routes/authRoutes');

const profissionalRoutes =
require('./src/routes/profissionalRoutes');

const agendamentoRoutes =
require('./src/routes/agendamentoRoutes');

const dashboardRoutes =
require('./src/routes/dashboardRoutes');

const perfilRoutes =
require('./src/routes/perfilRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(

  '/uploads',

  express.static(

    path.join(__dirname,'uploads')

  )

);

app.use(

  '/auth',

  authRoutes

);

app.use(

  '/profissionais',

  profissionalRoutes

);

app.use(

  '/agendamentos',

  agendamentoRoutes

);

app.use(

  '/dashboard',

  dashboardRoutes

);

app.use(

  '/perfil',

  perfilRoutes

);

const PORT =
3000;

app.listen(

  PORT,

  ()=>{

    console.log(

      `Servidor rodando:
http://localhost:${PORT}`

    );

  }

);