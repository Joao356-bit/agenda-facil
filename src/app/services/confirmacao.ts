import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({

providedIn:'root'

})

export class ConfirmacaoService{

private estadoSubject=

new BehaviorSubject<any>(null);

estado$=

this.estadoSubject
.asObservable();

abrir(
mensagem:string,
callback:()=>void
):void{

this.estadoSubject.next({

mensagem,
callback

});

}

fechar():void{

this.estadoSubject.next(
null
);

}

}