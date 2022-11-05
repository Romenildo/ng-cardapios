import { Component, OnInit } from '@angular/core';
import { Cardapio } from 'src/app/models/cardapio';

@Component({
  selector: 'app-lista-cardapios',
  templateUrl: './lista-cardapios.component.html',
  styleUrls: ['./lista-cardapios.component.scss']
})

export class ListaCardapiosComponent implements OnInit {
  
  cardapios:Cardapio[] = [
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKaA0WCReMEpT45pGFAiimUBHwsOaeAwiYeQ&usqp=CAU",
      titulo: "Cardapio 01",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTJG829yflNT4ZL18aGofHC6vxnE5V-KhDCA&usqp=CAU",
      titulo: "Cardapio 02",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnbkUpwQJO9JeNsTFNEndAbeiOCORvS-PVrQ&usqp=CAU",
      titulo: "Cardapio 03",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
    },
    {
      imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFwXeWCZOmFWOCYkNAYLHdC9MzdEFy47-R3Q&usqp=CAU",
      titulo: "Cardapio 04",
      descricao: "Lorem apsorum",
      telefone: "(83)98737-0281", 
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
