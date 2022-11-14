
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

  constructor(private service: TransacaoService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaTransacoes) => {
      this.listaTransacoes = listaTransacoes
    })
  }

}
