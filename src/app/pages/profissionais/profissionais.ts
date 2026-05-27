<<<<<<< HEAD
import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';
=======
import { Component } from '@angular/core';
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

<<<<<<< HEAD
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

=======
@Component({
  selector: 'app-profissionais',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profissionais.html',
  styleUrls: ['./profissionais.css']
})
export class ProfissionaisComponent {
  modalAberto = false;
  mensagem = '';
  profissionalForm: FormGroup;
  profissionais = [
    {
      nome: 'Dr. João Silva',
      especialidade: 'Cardiologista',
      email: 'joao@email.com'
    },

    {
      nome: 'Dra. Ana Souza',
      especialidade: 'Pediatra',
      email: 'ana@email.com'
    },

    {
      nome: 'Dr. Pedro Lima',
      especialidade: 'Dermatologista',
      email: 'pedro@email.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.profissionalForm = this.fb.group({
      nome: [
        '',
        Validators.required
      ],

      especialidade: [
        '',
        Validators.required
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }

  abrirModal() {
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.profissionalForm.reset();
  }

  adicionarProfissional() {
    if (this.profissionalForm.invalid) {
      this.profissionalForm.markAllAsTouched();
      return;
    }
    this.profissionais.push(
      this.profissionalForm.value
    );

    this.mensagem =
      'Profissional cadastrado com sucesso!';
    setTimeout(() => {
      this.mensagem = '';
    }, 3000);
    this.fecharModal();
  }

  excluirProfissional(index: number) {
    this.profissionais.splice(index, 1);

  }
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
}