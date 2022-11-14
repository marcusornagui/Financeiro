import { Router, ActivatedRoute } from '@angular/router';
import { Transacao } from './../transacoes';
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-editar-transacao',
  templateUrl: './editar-transacao.component.html',
  styleUrls: ['./editar-transacao.component.css']
})
export class EditarTransacaoComponent implements OnInit {

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

  editarTransacao() {
    this.service.editar(this.transacao).subscribe(() => {
      this.router.navigate(['/listarTransacao'])
    })

  }

  cancelar() {
    this.router.navigate(['/listarTransacao'])
  }

}
