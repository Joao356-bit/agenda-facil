import {
  Injectable
} from '@angular/core';

import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import {
  Router
} from '@angular/router';

import {
  tap
} from 'rxjs/operators';

@Injectable({

providedIn:'root'

})

export class AuthService {

private apiUrl=
'http://localhost:3000/auth';

constructor(

private http:
HttpClient,

private router:
Router

){}

login(

email:string,
senha:string

){

return this.http.post<any>(

`${this.apiUrl}/login`,

{

email,
senha

}

)

.pipe(

tap(

(resposta:any)=>{

if(

resposta?.token

){

this.salvarToken(

resposta.token

);

if(

resposta.usuario

){

localStorage.setItem(

'usuarioNome',

resposta.usuario.nome || ''

);

localStorage.setItem(

'usuarioFoto',

resposta.usuario.foto || ''

);

}

}

}

)

);

}

register(

nome:string,
email:string,
senha:string

){

return this.http.post(

`${this.apiUrl}/register`,

{

nome,
email,
senha

}

);

}

getToken():
string|null{

return localStorage
.getItem(

'token'

);

}

salvarToken(
token:string
):void{

localStorage
.setItem(

'token',
token

);

}

logout():void{

localStorage
.removeItem(

'token'

);

this.router.navigate(

['/']

);

}

isAuthenticated():
boolean{

return !!this
.getToken();

}

getAuthHeaders(){

return{

headers:

new HttpHeaders({

Authorization:

`Bearer ${this.getToken()}`

})

};

}

}