import { Router } from '@angular/router';

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
  favoritos: boolean = false
  listaFavoritos: Transacao[] = [];
  titulo: string = 'Minhas Transações'

  constructor(
    private service: TransacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaTransacoes) => {
      this.listaTransacoes = listaTransacoes
    })
  }

  carregarMaisTransacoes() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe(listaTransacoes => {
      this.listaTransacoes.push(...listaTransacoes);

      if (!listaTransacoes.length) {
        this.haMaisTransacoes = false
      }
    })
  }

  pesquisarTransacoes() {
    this.haMaisTransacoes = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaTransacoes => {
        this.listaTransacoes = listaTransacoes
      })
  }

  recarregarComponente() {
    this.favoritos = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])
  }

  listarFavoritos() {
    this.titulo = 'Minhas Transações Favoritas'
    this.favoritos = true
    this.haMaisTransacoes = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos)
      .subscribe(listaTransacoesFavoritas => {
        this.listaTransacoes = listaTransacoesFavoritas
        this.listaFavoritos = listaTransacoesFavoritas
      })
  }


}
