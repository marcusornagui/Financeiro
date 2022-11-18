import { TransacaoService } from './../transacao.service';
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
    modelo: '',
    favorito: false
  }

  constructor(private service: TransacaoService) { }

  ngOnInit(): void {
  }

  larguraTransacao(): string {
    if (this.transacao.conteudo.length >= 250) {
      return 'transacao-g'
    } else {
      return 'transacao-p'
    }
  }

  mudarIconeFavorito(): string {
    if (this.transacao.favorito == false) {
      return 'inativo'
    } else {
      return 'ativo'
    }
  }

  atualizarFavorito()  {
    this.service.mudarFavorito(this.transacao).subscribe();
  }

}
