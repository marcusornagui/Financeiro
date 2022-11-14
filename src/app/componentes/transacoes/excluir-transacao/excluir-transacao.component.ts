import { ActivatedRoute, Router } from '@angular/router';
import { Transacao } from './../transacoes';
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-excluir-transacao',
  templateUrl: './excluir-transacao.component.html',
  styleUrls: ['./excluir-transacao.component.css']
})
export class ExcluirTransacaoComponent implements OnInit {

  transacao: Transacao = {
    id: 0,
    conteudo: '',
    valor: 0,
    modelo: ''
  }

  constructor(
    private service: TransacaoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((transacao) => {
      this.transacao = transacao
    })
  }

  excluirPensamento() {
    if (this.transacao.id) {
      this.service.excluir(this.transacao.id).subscribe(() => {
        this.router.navigate(['/listarTransacao'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarTransacao'])
  }

}
