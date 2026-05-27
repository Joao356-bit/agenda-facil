import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  ProfissionalService
} from '../../services/profissional';

import {
  BuscaService
} from '../../services/busca';

import {
  ConfirmacaoService
} from '../../services/confirmacao';

import {
  NotificacaoService
} from '../../services/notificacao';

@Component({

selector:'app-profissionais',

standalone:true,

imports:[
CommonModule,
ReactiveFormsModule
],

templateUrl:'./profissionais.html',

styleUrls:[
'./profissionais.css'
]

})

export class ProfissionaisComponent
implements OnInit{

profissionais:any[]=[];

profissionaisFiltrados:any[]=[];

modalAberto=false;

mensagem='';

profissionalForm!:FormGroup;

editando=false;

idEditando:number|null=null;

constructor(

private fb:
FormBuilder,

private profissionalService:
ProfissionalService,

private buscaService:
BuscaService,

private confirmacaoService:
ConfirmacaoService,

private notificacaoService:
NotificacaoService

){}

ngOnInit():void{

this.profissionalForm=

this.fb.group({

nome:[
'',
Validators.required
],

especialidade:[
'',
Validators.required
],

telefone:['']

});

this.carregarProfissionais();

this.buscaService
.busca$
.subscribe({

next:(texto)=>{

this.filtrar(
texto
);

}

});

}

carregarProfissionais():void{

this.profissionalService
.listar()

.subscribe({

next:(dados:any)=>{

this.profissionais=dados;

this.profissionaisFiltrados=dados;

},

error:(err)=>{

console.error(err);

}

});

}

filtrar(
texto:string
):void{

texto=
texto.toLowerCase();

this.profissionaisFiltrados=

this.profissionais.filter(

(p:any)=>

p.nome
.toLowerCase()
.includes(texto)

||

p.especialidade
.toLowerCase()
.includes(texto)

);

}

abrirModal():void{

this.modalAberto=true;

this.editando=false;

this.profissionalForm.reset();

}

fecharModal():void{

this.modalAberto=false;

}

adicionarProfissional():void{

if(
this.profissionalForm.invalid
){

return;

}

const dados=
this.profissionalForm.value;

if(this.editando){

this.profissionalService
.editar(

this.idEditando!,
dados.nome,
dados.especialidade,
dados.telefone

)

.subscribe({

next:()=>{

this.notificacaoService
.mostrar(
'Profissional atualizado'
);

this.carregarProfissionais();

this.fecharModal();

}

});

}else{

this.profissionalService
.criar(

dados.nome,
dados.especialidade,
dados.telefone

)

.subscribe({

next:()=>{

this.notificacaoService
.mostrar(
'Profissional cadastrado'
);

this.carregarProfissionais();

this.fecharModal();

}

});

}

}

editarProfissional(
profissional:any
):void{

this.editando=true;

this.idEditando=
profissional.id;

this.modalAberto=true;

this.profissionalForm.patchValue({

nome:
profissional.nome,

especialidade:
profissional.especialidade,

telefone:
profissional.telefone

});

}

excluirProfissional(
id:number
):void{

this.confirmacaoService
.abrir(

'Deseja excluir este profissional?',

()=>{

this.profissionalService
.excluir(id)

.subscribe({

next:()=>{

this.notificacaoService
.mostrar(
'Profissional removido'
);

this.carregarProfissionais();

}

});

}

);

}

}