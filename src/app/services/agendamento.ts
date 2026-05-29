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

export class AgendamentoService {

  private http =
  inject(HttpClient);

  private authService =
  inject(AuthService);

  private apiUrl =
'https://agenda-facil-api.onrender.com/agendamentos';

  listar():
  Observable<any>{

    return this.http.get(

      this.apiUrl,

      this.authService
      .getAuthHeaders()

    );

  }

  criar(

    cliente:string,

    data:string,

    hora:string,

    servico:string,

    profissional_id:number,

    observacoes:string

  ){

    return this.http.post(

      this.apiUrl,

      {

        cliente,
        data,
        hora,
        servico,
        profissional_id,
        observacoes

      },

      this.authService
      .getAuthHeaders()

    );

  }

  atualizar(

    id:number,

    cliente:string,

    data:string,

    hora:string,

    servico:string,

    profissional_id:number,

    observacoes:string

  ){

    return this.http.put(

      `${this.apiUrl}/${id}`,

      {

        cliente,
        data,
        hora,
        servico,
        profissional_id,
        observacoes

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