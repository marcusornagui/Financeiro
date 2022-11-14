import { Transacao } from './../transacoes';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transacao',
  templateUrl: './transacao.component.html',
  styleUrls: ['./transacao.component.css']
})
export class TransacaoComponent implements OnInit {

  @Input() transacao: Transacao = {
    id: 0,
    conteudo: '',
    valor: 0,
    modelo: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraTransacao(): string {
    if (this.transacao.conteudo.length >= 250) {
      return 'transacao-g'
    } else {
      return 'transacao-p'
    }
  }

}
