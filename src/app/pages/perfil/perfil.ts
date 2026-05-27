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
=======
@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './perfil.html',
  styleUrls: ['./perfil.css']
})
export class PerfilComponent {
  perfilForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.perfilForm = this.fb.group({
      nome: [
        'João Luiz',
        Validators.required
      ],

      email: [
        'joao@email.com',
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
        [
          Validators.required,
          Validators.email
        ]
      ],

<<<<<<< HEAD
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

=======
      senhaAtual: [''],

      novaSenha: ['']
    });
  }

  salvarPerfil() {
    if (this.perfilForm.invalid) {
      this.perfilForm.markAllAsTouched();
      return;
    }

    console.log(
      this.perfilForm.value
    );
  }
>>>>>>> f37fbba775926c84c7a0cff60e6e4fcb8247cc10
}