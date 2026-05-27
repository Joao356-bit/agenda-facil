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

export class DashboardService {

  private http =
  inject(HttpClient);

  private authService =
  inject(AuthService);

  private apiUrl =
  'http://localhost:3000/dashboard';

  resumo():Observable<any>{

    return this.http.get(

      this.apiUrl,

      this.authService
      .getAuthHeaders()

    );

  }

}