import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient
} from '@angular/common/http';

import {
  AuthService
} from './auth';

@Injectable({

  providedIn:'root'

})

export class PerfilService {

  private http =
  inject(HttpClient);

  private authService =
  inject(AuthService);

  private apiUrl =
  'http://localhost:3000/perfil';

  buscar(){

    return this.http.get(

      this.apiUrl,

      this.authService
      .getAuthHeaders()

    );

  }

  atualizar(
    dados:any
  ){

    return this.http.put(

      this.apiUrl,

      dados,

      this.authService
      .getAuthHeaders()

    );

  }

  uploadFoto(
    arquivo:File
  ){

    const formData =
    new FormData();

    formData.append(

      'foto',
      arquivo

    );

    return this.http.post(

      `${this.apiUrl}/foto`,

      formData,

      this.authService
      .getAuthHeaders()

    );

  }

}