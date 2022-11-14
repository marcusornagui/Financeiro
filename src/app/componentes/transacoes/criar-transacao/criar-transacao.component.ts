
import { Transacao } from './../transacoes';
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-transacao',
  templateUrl: './criar-transacao.component.html',
  styleUrls: ['./criar-transacao.component.css']
})
export class CriarTransacaoComponent implements OnInit {

  transacao: Transacao = {
    conteudo: '',
    valor: 0,
    modelo: ''
  }

  constructor(
    private service: TransacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  criarTransacao() {
    this.service.criar(this.transacao).subscribe(() => {
      this.router.navigate(['/listarTransacao'])
    })
  }

  cancelar() {
    this.router.navigate(['/listarTransacao'])
  }

}
