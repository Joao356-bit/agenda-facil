import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  FormsModule
} from '@angular/forms';

import {
  ProfissionalService
} from '../../services/profissional';

@Component({

  selector:'app-profissionais',

  standalone:true,

  imports:[
    CommonModule,
    FormsModule
  ],

  templateUrl:'./profissionais.html',

  styleUrls:[
    './profissionais.css'
  ]

})

export class ProfissionaisComponent
implements OnInit{

  profissionais:any[]=[];

  novoProfissional={

    nome:'',
    especialidade:'',
    telefone:''

  };

  constructor(

    private profissionalService:
    ProfissionalService,

    private cdr:
    ChangeDetectorRef

  ){}

  ngOnInit():void{

    this.carregarProfissionais();

  }

  carregarProfissionais():void{

    this.profissionalService

    .listar()

    .subscribe({

      next:(response:any)=>{

        console.log(
          'PROFISSIONAIS RECEBIDOS:',
          response
        );

        if(Array.isArray(response)){

          this.profissionais =
          response;

        }else{

          console.warn(
            'Resposta não é um array:',
            response
          );

          this.profissionais = [];

        }

        console.log(
          'ARRAY FINAL:',
          this.profissionais
        );

        this.cdr.detectChanges();

      },

      error:(err:any)=>{

        console.error(
          'ERRO AO CARREGAR PROFISSIONAIS:',
          err
        );

      }

    });

  }

  adicionarProfissional():void{

    if(

      !this.novoProfissional.nome ||
      !this.novoProfissional.especialidade ||
      !this.novoProfissional.telefone

    ){

      alert(
        'Preencha todos os campos'
      );

      return;

    }

    const profissional={

      nome:this.novoProfissional.nome,

      especialidade:this.novoProfissional.especialidade,

      telefone:this.novoProfissional.telefone

    };

    this.profissionalService

    .criar(

      profissional.nome,
      profissional.especialidade,
      profissional.telefone

    )

    .subscribe({

      next:(response:any)=>{

        this.profissionais=[

          ...this.profissionais,

          {

            id:response.id,

            ...profissional

          }

        ];

        this.novoProfissional={

          nome:'',
          especialidade:'',
          telefone:''

        };

        this.cdr.detectChanges();

        alert(
          'Profissional cadastrado com sucesso'
        );

      },

      error:(err:any)=>{

        console.error(err);

        alert(
          'Erro ao cadastrar profissional'
        );

      }

    });

  }

  excluirProfissional(id:number):void{

    this.profissionalService

    .excluir(id)

    .subscribe({

      next:()=>{

        this.profissionais=

        this.profissionais.filter(

          profissional=>

          profissional.id !== id

        );

        this.cdr.detectChanges();

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

}