import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  RouterModule
} from '@angular/router';

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
    FormsModule,
    RouterModule
  ],

  templateUrl:'./novo-agendamento.html',

  styleUrls:[
    './novo-agendamento.css'
  ]

})

export class NovoAgendamentoComponent
implements OnInit{

  profissionais:any[]=[];

  agendamento={

    cliente:'',
    data:'',
    hora:'',
    servico:'',
    profissional_id:''

  };

  constructor(

    private profissionalService:
    ProfissionalService,

    private agendamentoService:
    AgendamentoService

  ){}

  ngOnInit():void{

    this.carregarProfissionais();

  }

  carregarProfissionais():void{

    this.profissionalService

    .listar()

    .subscribe({

      next:(response:any)=>{

        this.profissionais=
        response;

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

  salvarAgendamento():void{

    if(

      !this.agendamento.cliente ||
      !this.agendamento.data ||
      !this.agendamento.hora ||
      !this.agendamento.servico ||
      !this.agendamento.profissional_id

    ){

      alert(
        'Preencha todos os campos'
      );

      return;

    }

    const payload={

      ...this.agendamento,

      profissional_id:Number(
        this.agendamento.profissional_id
      )

    };

    this.agendamentoService

    .criar(

      payload.cliente,
      payload.data,
      payload.hora,
      payload.servico,
      payload.profissional_id,
      ''

    )

    .subscribe({

      next:()=>{

        alert(
          'Agendamento criado com sucesso'
        );

        this.agendamento={

          cliente:'',
          data:'',
          hora:'',
          servico:'',
          profissional_id:''

        };

      },

      error:(err:any)=>{

        console.error(err);

        alert(
          'Erro ao criar agendamento'
        );

      }

    });

  }

}