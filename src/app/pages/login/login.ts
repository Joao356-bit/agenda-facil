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

selector:'app-login',

standalone:true,

imports:[
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

const{

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

next:()=>{

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

}

});

}

}