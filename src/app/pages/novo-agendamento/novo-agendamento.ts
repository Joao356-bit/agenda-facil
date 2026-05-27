import {
  Component,
  OnInit
} from '@angular/core';

import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

import {
  CommonModule
} from '@angular/common';

import {
  ProfissionalService
} from '../../services/profissional';

import {
  AgendamentoService
} from '../../services/agendamento';

@Component({

selector:'app-novo-agendamento',

standalone:true,

imports:[
CommonModule,
ReactiveFormsModule
],

templateUrl:'./novo-agendamento.html',

styleUrls:[
'./novo-agendamento.css'
]

})

export class NovoAgendamentoComponent
implements OnInit {

agendamentoForm:FormGroup;

profissionais:any[]=[];

horarios=[

'08:00',
'09:00',
'10:00',
'11:00',
'14:00',
'15:00',
'16:00'

];

constructor(

private fb:FormBuilder,

private profissionalService:
ProfissionalService,

private agendamentoService:
AgendamentoService

){

this.agendamentoForm=
this.fb.group({

cliente:[
'',
Validators.required
],

profissional:[
'',
Validators.required
],

servico:[
'Consulta',
Validators.required
],

data:[
'',
Validators.required
],

horario:[
'',
Validators.required
],

observacoes:['']

});

}

ngOnInit():void{

this.profissionalService
.listar()

.subscribe({

next:(dados:any)=>{

this.profissionais=
dados;

}

});

}

onSubmit():void{

if(
this.agendamentoForm.invalid
){

return;

}

const{

cliente,
profissional,
servico,
data,
horario,
observacoes

}=this.agendamentoForm.value;

this.agendamentoService

.criar(

cliente,
Number(profissional),
servico,
data,
horario,
observacoes

)

.subscribe({

next:()=>{

alert(
'Agendamento criado'
);

this.agendamentoForm
.reset();

},

error:(err:any)=>{

console.error(
err
);

}

});

}

}