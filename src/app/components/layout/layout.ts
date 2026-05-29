import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
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
    CommonModule,
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

  usuarioNome='Usuário';

  usuarioFoto='';

  constructor(

    private authService:
    AuthService,

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

      next:(mensagem:string)=>{

        this.mensagem=
        mensagem;

      }

    });

    this.confirmacaoService

    .estado$

    .subscribe({

      next:(estado:any)=>{

        this.confirmacao=
        estado;

      }

    });

    this.carregarUsuario();

  }

  carregarUsuario():void{

  this.usuarioNome =

  localStorage.getItem(
    'usuarioNome'
  ) || 'Usuário';

  const foto =

  localStorage.getItem(
    'usuarioFoto'
  );

  if(foto){

    this.usuarioFoto =

    `https://agenda-facil-api.onrender.com/${foto}?t=${Date.now()}`;

  }

}

  logout():void{

    localStorage.removeItem(

      'usuarioNome'

    );

    localStorage.removeItem(

      'usuarioFoto'

    );

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