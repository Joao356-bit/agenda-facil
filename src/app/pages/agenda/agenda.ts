import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  AgendamentoService
} from '../../services/agendamento';

@Component({

  selector:'app-agenda',

  standalone:true,

  imports:[
    CommonModule,
    RouterModule
  ],

  templateUrl:'./agenda.html',

  styleUrls:[
    './agenda.css'
  ]

})

export class AgendaComponent
implements OnInit{

  agendamentos:any[]=[];

  constructor(

    private agendamentoService:
    AgendamentoService,

    private cdr:
    ChangeDetectorRef

  ){}

  ngOnInit():void{

    this.carregarAgendamentos();

  }

  carregarAgendamentos():void{

    this.agendamentoService

    .listar()

    .subscribe({

      next:(resposta:any)=>{

        this.agendamentos=[
          ...resposta
        ];

        this.cdr.detectChanges();

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

  excluirAgendamento(
    id:number
  ):void{

    this.agendamentoService

    .excluir(id)

    .subscribe({

      next:()=>{

        this.agendamentos=

        this.agendamentos.filter(

          agendamento=>

          agendamento.id !== id

        );

        this.cdr.detectChanges();

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

}