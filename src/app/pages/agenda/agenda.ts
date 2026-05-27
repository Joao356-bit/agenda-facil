import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  Router
} from '@angular/router';

import {
  AgendamentoService
} from '../../services/agendamento';

import {
  BuscaService
} from '../../services/busca';

@Component({

selector:'app-agenda',

standalone:true,

imports:[
CommonModule
],

templateUrl:'./agenda.html',

styleUrls:[
'./agenda.css'
]

})

export class AgendaComponent
implements OnInit{

diaSelecionado=
'Agendamentos';

horarios:any[]=[];

horariosFiltrados:any[]=[];

constructor(

private router:
Router,

private agendamentoService:
AgendamentoService,

private buscaService:
BuscaService

){}

ngOnInit():void{

this.carregarAgendamentos();

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

carregarAgendamentos():void{

this.agendamentoService
.listar()

.subscribe({

next:(dados:any)=>{

this.horarios=
dados;

this.horariosFiltrados=
dados;

},

error:(err)=>{

console.error(
err
);

}

});

}

filtrar(
texto:string
):void{

texto=
texto
.toLowerCase();

this.horariosFiltrados=

this.horarios.filter(

(item:any)=>

item.cliente
?.toLowerCase()
.includes(texto)

||

item.profissional
?.toLowerCase()
.includes(texto)

||

item.servico
?.toLowerCase()
.includes(texto)

);

}

novoAgendamento():void{

this.router.navigate([

'/novo-agendamento'

]);

}

editarAgendamento(
id:number
):void{

this.router.navigate([

'/novo-agendamento'

],{

queryParams:{
id:id
}

});

}

excluirAgendamento(
id:number
):void{

if(

!confirm(

'Deseja excluir este agendamento?'

)

){

return;

}

this.agendamentoService
.excluir(
id
)

.subscribe({

next:()=>{

this.carregarAgendamentos();

},

error:(err)=>{

console.error(
err
);

}

});

}

}