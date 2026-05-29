import {
  Injectable,
  inject
} from '@angular/core';

import {
  HttpClient,
  HttpHeaders
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
'https://agenda-facil-api.onrender.com/perfil';

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

      arquivo,

      arquivo.name

    );

    const token =
    this.authService.getToken();

    return this.http.post(

      `${this.apiUrl}/foto`,

      formData,

      {

        headers:

        new HttpHeaders({

          Authorization:
          `Bearer ${token}`

        })

      }

    );

  }

}