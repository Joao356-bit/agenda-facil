import { Component } from '@angular/core';

import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import {
  Router,
  RouterLink
} from '@angular/router';

import {
  AuthService
} from '../../services/auth';

@Component({

  selector:'app-cadastro',

  standalone:true,

  imports:[
    RouterLink,
    ReactiveFormsModule
  ],

  templateUrl:'./cadastro.html',

  styleUrls:[
    './cadastro.css'
  ]

})

export class CadastroComponent {

  cadastroForm:FormGroup;

  constructor(

    private fb:FormBuilder,

    private authService:AuthService,

    private router:Router

  ){

    this.cadastroForm=

    this.fb.group({

      nome:[

        '',

        [

          Validators.required

        ]

      ],

      email:[

        '',

        [

          Validators.required,
          Validators.email

        ]

      ],

      senha:[

        '',

        [

          Validators.required,
          Validators.minLength(6)

        ]

      ]

    });

  }

  onSubmit():void{

    if(

      this.cadastroForm.invalid

    ){

      this.cadastroForm
      .markAllAsTouched();

      return;

    }

    const {

      nome,
      email,
      senha

    }=

    this.cadastroForm.value;

    this.authService
    .register(

      nome,
      email,
      senha

    )

    .subscribe({

      next:()=>{

        alert(
          'Cadastro realizado'
        );

        this.router.navigate([
          '/'
        ]);

      },

      error:(err:any)=>{

        console.error(err);

      }

    });

  }

}