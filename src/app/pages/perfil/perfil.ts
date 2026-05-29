import {
  Component,
  OnInit,
  ChangeDetectorRef
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

    private cdr:
    ChangeDetectorRef

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

      senhaAtual:[
        ''
      ],

      novaSenha:[
        ''
      ],

      foto:[
        ''
      ]

    });

    this.carregarPerfil();

  }

  carregarPerfil():void{

    this.perfilService

    .buscar()

    .subscribe({

      next:(usuario:any)=>{

        this.perfilForm.patchValue({

          nome:
          usuario.nome,

          email:
          usuario.email,

          foto:
          usuario.foto

        });

        localStorage.setItem(

          'usuarioNome',

          usuario.nome

        );

        localStorage.setItem(

          'usuarioFoto',

          usuario.foto || ''

        );

        if(usuario.foto){

          this.fotoUrl=

          `https://agenda-facil-api.onrender.com/${usuario.foto}?t=${Date.now()}`;

        }

        this.cdr.detectChanges();

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

    const formData =
    new FormData();

    formData.append(

      'foto',

      arquivo,

      arquivo.name

    );

    fetch(

      'https://agenda-facil-api.onrender.com/perfil/foto',

      {

        method:'POST',

        headers:{

          Authorization:

          `Bearer ${localStorage.getItem('token')}`

        },

        body:formData

      }

    )

    .then(

      response=>response.json()

    )

    .then(

      (resposta:any)=>{

        if(resposta.caminho){

          this.fotoUrl=

          `https://agenda-facil-api.onrender.com/${resposta.caminho}?t=${Date.now()}`;

          this.perfilForm.patchValue({

            foto:
            resposta.caminho

          });

          localStorage.setItem(

            'usuarioFoto',

            resposta.caminho

          );

          this.cdr.detectChanges();

        }

      }

    )

    .catch(

      (err:any)=>{

        console.error(err);

      }

    );

  }

  salvarPerfil():void{

    if(

      this.perfilForm.invalid

    ){

      alert(
        'Preencha os campos corretamente'
      );

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

        localStorage.setItem(

          'usuarioNome',

          dados.nome

        );

        localStorage.setItem(

          'usuarioFoto',

          dados.foto || ''

        );

        this.carregarPerfil();

        this.cdr.detectChanges();

        alert(
          'Perfil atualizado com sucesso'
        );

      },

      error:(err:any)=>{

        console.error(err);

        alert(
          'Erro ao atualizar perfil'
        );

      }

    });

  }

}