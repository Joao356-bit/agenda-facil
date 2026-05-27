import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { AuthService } from './auth';

@Injectable({
  providedIn: 'root'
})

export class AgendamentoService {

  private http =
  inject(HttpClient);

  private authService =
  inject(AuthService);

  private apiUrl =
  'http://localhost:3000/agendamentos';

  listar(): Observable<any> {

    return this.http.get(

      this.apiUrl,

      this.authService
      .getAuthHeaders()

    );

  }

  criar(

    cliente:string,
    profissional_id:number,
    servico:string,
    data:string,
    hora:string,
    observacoes:string

  ){

    return this.http.post(

      this.apiUrl,

      {
        cliente,
        profissional_id,
        servico,
        data,
        hora,
        observacoes
      },

      this.authService
      .getAuthHeaders()

    );

  }

  editar(
    id:number,
    dados:any
  ){

    return this.http.put(

      `${this.apiUrl}/${id}`,

      dados,

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