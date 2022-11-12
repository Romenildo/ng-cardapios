import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cardapio } from '../models/cardapio';
import { CardapiosDTO } from '../models/cardapiosDTO';

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private http: HttpClient) { }


  cardapios:Cardapio[] = [];

  /**
   * Observable é similar a uma promisse porem ele me inscreve em algo e fica monitorando toda vez que aquilo é modificado
   * É OBRIGATORIO TER O SEU TIPO para melhorar o codigo limpo(Só se não souber mesmo)
   * 
   */
 
  getCardapios(): Observable<CardapiosDTO> {
    return this.http.get<CardapiosDTO>(`${environment.apiUrl}/cardapios`);
  }

  removerCardapio(id:number) {
    return this.http.delete(`${environment.apiUrl}/cardapios/${id}`);
  }

  getCardapiosDestacados(){
    let lista = [...this.cardapios]
    return this.cardapios.filter(f=>f.destaque)
  }
  
}
