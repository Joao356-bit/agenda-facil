import {
  Component
} from '@angular/core';

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
  CommonModule
} from '@angular/common';

import {
  AuthService
} from '../../services/auth';

@Component({

  selector:'app-login',

  standalone:true,

  imports:[
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],

  templateUrl:'./login.html',

  styleUrls:[
    './login.css'
  ]

})

export class LoginComponent {

  loginForm:FormGroup;

  carregando=false;

  constructor(

    private fb:FormBuilder,

    private authService:AuthService,

    private router:Router

  ){

    this.loginForm=

    this.fb.group({

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

      this.loginForm.invalid

    ){

      this.loginForm
      .markAllAsTouched();

      return;

    }

    this.carregando=true;

    const {

      email,
      senha

    }=

    this.loginForm.value;

    this.authService

    .login(

      email,
      senha

    )

    .subscribe({

      next:(response:any)=>{

  console.log(
    'LOGIN RESPONSE:',
    response
  );

  this.router.navigate([
    '/dashboard'
  ]);

},

      error:(err:any)=>{

        console.error(

          'Erro no login:',

          err

        );

        alert(

          err?.error?.message ||

          'Erro ao fazer login'

        );

        this.carregando=false;

      }

    });

  }

  esqueciSenha():void{

    alert(

      'Funcionalidade em desenvolvimento'

    );

  }

}