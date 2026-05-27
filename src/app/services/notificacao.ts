import {
  Injectable
} from '@angular/core';

import {
  BehaviorSubject
} from 'rxjs';

@Injectable({

providedIn:'root'

})

export class NotificacaoService{

private mensagemSubject=

new BehaviorSubject<string>(
''
);

mensagem$=

this.mensagemSubject
.asObservable();

mostrar(
mensagem:string
):void{

this.mensagemSubject
.next(
mensagem
);

setTimeout(()=>{

this.limpar();

},3000);

}

limpar():void{

this.mensagemSubject
.next('');

}

}