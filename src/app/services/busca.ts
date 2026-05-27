import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({

  providedIn:'root'

})

export class BuscaService {

  private buscaSubject =

  new BehaviorSubject<string>(
    ''
  );

  busca$ =

  this.buscaSubject
  .asObservable();

  atualizarBusca(
    texto:string
  ):void{

    this.buscaSubject.next(
      texto
    );

  }

}