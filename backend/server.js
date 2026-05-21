require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const agendamentoRoutes = require("./src/routes/agendamentoRoutes");
const profissionalRoutes = require("./src/routes/profissionalRoutes");
const perfilRoutes = require("./src/routes/perfilRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/agendamentos" , agendamentoRoutes);
app.use("/profissionais", profissionalRoutes);
app.use("/perfil" , perfilRoutes);

app.get('/', (req, res)=> {
    res.json({mensagem: "Api funcionando"});
});

app.listen(process.env.PORT, () =>{
     console.log(`Servidor rodando na porta ${process.env.PORT}`);
});