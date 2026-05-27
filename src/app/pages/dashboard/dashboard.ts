import {
  Component,
  OnInit
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  DashboardService
} from '../../services/dashboard';

@Component({

  selector:'app-dashboard',

  standalone:true,

  imports:[
    CommonModule
  ],

  templateUrl:'./dashboard.html',

  styleUrls:[
    './dashboard.css'
  ]

})

export class DashboardComponent
implements OnInit {

  dados:any={

    totalAgendamentos:0,
    totalProfissionais:0,
    recentes:[]

  };

  constructor(

    private dashboardService:
    DashboardService

  ){}

  ngOnInit():void{

    this.carregarDashboard();

  }

  carregarDashboard():void{

    this.dashboardService
    .resumo()

    .subscribe({

      next:(resposta:any)=>{

        console.log(
          'Dashboard:',
          resposta
        );

        this.dados=
        resposta;

      },

      error:(err:any)=>{

        console.error(
          err
        );

      }

    });

  }

}