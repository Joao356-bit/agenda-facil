import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router,
  RouterModule
} from '@angular/router';

import {
  FormsModule
} from '@angular/forms';

import {
  AuthService
} from '../../services/auth';

import {
  BuscaService
} from '../../services/busca';

import {
  NotificacaoService
} from '../../services/notificacao';

import {
  ConfirmacaoService
} from '../../services/confirmacao';

@Component({

selector:'app-layout',

standalone:true,

imports:[
RouterModule,
FormsModule
],

templateUrl:'./layout.html',

styleUrls:[
'./layout.css'
]

})

export class LayoutComponent
implements OnInit{

textoBusca='';

mensagem='';

confirmacao:any=null;

constructor(

private authService:
AuthService,

private router:
Router,

private buscaService:
BuscaService,

private notificacaoService:
NotificacaoService,

private confirmacaoService:
ConfirmacaoService

){}

ngOnInit():void{

this.notificacaoService
.mensagem$
.subscribe({

next:(mensagem)=>{

this.mensagem=
mensagem;

}

});

this.confirmacaoService
.estado$
.subscribe({

next:(estado)=>{

this.confirmacao=
estado;

}

});

}

logout():void{

this.authService
.logout();

}

buscar():void{

this.buscaService
.atualizarBusca(

this.textoBusca

);

}

confirmar():void{

if(

this.confirmacao
?.callback

){

this.confirmacao
.callback();

}

this.fecharModal();

}

fecharModal():void{

this.confirmacaoService
.fechar();

}

}