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
  PerfilService
} from '../../services/perfil';

import {
  NotificacaoService
} from '../../services/notificacao';

@Component({

  selector:'app-perfil',

  standalone:true,

  imports:[
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl:'./perfil.html',

  styleUrls:[
    './perfil.css'
  ]

})

export class PerfilComponent
implements OnInit{

  perfilForm!:FormGroup;

  fotoUrl='';

  constructor(

    private fb:
    FormBuilder,

    private perfilService:
    PerfilService,

    private notificacaoService:
    NotificacaoService

  ){}

  ngOnInit():void{

    this.perfilForm=

    this.fb.group({

      nome:[
        '',
        Validators.required
      ],

      email:[
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      senhaAtual:[''],

      novaSenha:[''],

      foto:['']

    });

    this.carregarPerfil();

  }

  carregarPerfil():void{

    this.perfilService
    .buscar()

    .subscribe({

      next:(usuario:any)=>{

        this.perfilForm
        .patchValue({

          nome:
          usuario.nome,

          email:
          usuario.email,

          foto:
          usuario.foto

        });

        if(usuario.foto){

          this.fotoUrl=

          `http://localhost:3000/${usuario.foto}`;

        }

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

  selecionarFoto(
    event:any
  ):void{

    const arquivo=

    event.target.files[0];

    if(!arquivo){

      return;

    }

    this.perfilService
    .uploadFoto(
      arquivo
    )

    .subscribe({

      next:(resposta:any)=>{

        this.fotoUrl=

        `http://localhost:3000/${resposta.foto}`;

        this.perfilForm
        .patchValue({

          foto:
          resposta.foto

        });

        this.notificacaoService
        .mostrar(

          'Foto atualizada'

        );

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

  salvarPerfil():void{

    if(

      this.perfilForm.invalid

    ){

      return;

    }

    const dados={

      nome:
      this.perfilForm.value.nome,

      email:
      this.perfilForm.value.email,

      senha:
      this.perfilForm.value.novaSenha,

      foto:
      this.perfilForm.value.foto

    };

    this.perfilService
    .atualizar(
      dados
    )

    .subscribe({

      next:()=>{

        this.notificacaoService
        .mostrar(

          'Perfil atualizado'

        );

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

}