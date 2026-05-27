import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  Observable
} from 'rxjs';

import {
  AuthService
} from './auth';

@Injectable({

  providedIn:'root'

})

export class ProfissionalService {

  private http =
  inject(HttpClient);

  private authService =
  inject(AuthService);

  private apiUrl =
  'http://localhost:3000/profissionais';

  listar():Observable<any>{

    return this.http.get(

      this.apiUrl,

      this.authService
      .getAuthHeaders()

    );

  }

  criar(
    nome:string,
    especialidade:string,
    telefone:string
  ){

    return this.http.post(

      this.apiUrl,

      {
        nome,
        especialidade,
        telefone
      },

      this.authService
      .getAuthHeaders()

    );

  }

  editar(

    id:number,
    nome:string,
    especialidade:string,
    telefone:string

  ){

    return this.http.put(

      `${this.apiUrl}/${id}`,

      {
        nome,
        especialidade,
        telefone
      },

      this.authService
      .getAuthHeaders()

    );

  }

  excluir(
    id:number
  ){

    return this.http.delete(

      `${this.apiUrl}/${id}`,

      this.authService
      .getAuthHeaders()

    );

  }

}