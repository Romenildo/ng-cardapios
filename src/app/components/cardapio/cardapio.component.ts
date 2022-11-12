import { Component, Input, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';
import { CardapioService } from 'src/app/services/cardapio.service';


@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.scss']
})
export class CardapioComponent implements OnInit {

  @Input() cardapio?: Cardapio;
  constructor(private cardapioService: CardapioService) { }

  ngOnInit(): void {
  }

  remover(cardapio?: Cardapio) {
    if (this.cardapio != null) {
      this.cardapioService.removerCardapio(this.cardapio.id);
    }


  }


}
