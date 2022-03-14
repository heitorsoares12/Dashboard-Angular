import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Eng. de Software', 10],
    ['Redes', 6],
    ['Sistemas Linear', 14],
    ['Prog. Web', 20],
    ['Prog. Mobile', 20],
    ['Lab. de BD', 30]
  ]

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
