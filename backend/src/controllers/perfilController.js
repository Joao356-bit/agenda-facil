const db =
require('../database/database');

const bcrypt =
require('bcrypt');


exports.buscar=(req,res)=>{

const sql=`

SELECT
id,
nome,
email,
foto
FROM usuarios
WHERE id=?

`;

db.get(

sql,

[req.userId],

(err,usuario)=>{

if(err){

return res
.status(500)
.json(err);

}

if(!usuario){

return res
.status(404)
.json({

success:false,
message:'Usuário não encontrado'

});

}

return res.json(
usuario
);

}

);

};


exports.atualizar=
async(req,res)=>{

const{

nome,
email,
senha,
foto

}=req.body;

let senhaHash=null;

if(senha){

senhaHash=

await bcrypt.hash(
senha,
10
);

}

const sql=`

UPDATE usuarios
SET
nome=?,
email=?,
senha=COALESCE(?,senha),
foto=?
WHERE id=?

`;

db.run(

sql,

[

nome,
email,
senhaHash,
foto,
req.userId

],

function(err){

if(err){

return res
.status(500)
.json(err);

}

return res.json({

success:true,
message:
'Perfil atualizado'

});

}

);

};


exports.uploadFoto=(req,res)=>{

if(!req.file){

return res
.status(400)
.json({

success:false,
message:
'Nenhuma foto enviada'

});

}

const caminho=

`uploads/${req.file.filename}`;

const sql=`

UPDATE usuarios
SET foto=?
WHERE id=?

`;

db.run(

sql,

[

caminho,
req.userId

],

function(err){

if(err){

return res
.status(500)
.json(err);

}

return res.json({

success:true,

foto:caminho

});

}

);

};