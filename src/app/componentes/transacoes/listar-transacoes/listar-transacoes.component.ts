
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { Transacao } from '../transacoes';

@Component({
  selector: 'app-listar-transacoes',
  templateUrl: './listar-transacoes.component.html',
  styleUrls: ['./listar-transacoes.component.css']
})
export class ListarTransacoesComponent implements OnInit {

  listaTransacoes: Transacao[] = [];
  paginaAtual: number = 1
  haMaisTransacoes: boolean = true
  filtro: string = ''

  constructor(private service: TransacaoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro).subscribe((listaTransacoes) => {
      this.listaTransacoes = listaTransacoes
    })
  }

  carregarMaisTransacoes() {
    this.service.listar(++this.paginaAtual, this.filtro).subscribe(listaTransacoes => {
      this.listaTransacoes.push(...listaTransacoes);

      if (!listaTransacoes.length) {
        this.haMaisTransacoes = false
      }
    })
  }

  pesquisarTransacoes() {
    this.haMaisTransacoes = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaTransacoes => {
        this.listaTransacoes = listaTransacoes
      })
  }

  listarFavoritos() {
    this.haMaisTransacoes = true
    this.paginaAtual = 1
    this.service.listarTransacoesFavoritas(this.paginaAtual, this.filtro)
      .subscribe(listaTransacoesFavoritas => {
        this.listaTransacoes = listaTransacoesFavoritas
      })
  }


}
