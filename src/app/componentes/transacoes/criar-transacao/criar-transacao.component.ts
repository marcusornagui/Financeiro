
import { Transacao } from './../transacoes';
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-transacao',
  templateUrl: './criar-transacao.component.html',
  styleUrls: ['./criar-transacao.component.css']
})
export class CriarTransacaoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: TransacaoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/)
      ])],
      valor: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(8)
      ])],
      modelo: ['despesa']
    })
  }

  criarTransacao() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarTransacao'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarTransacao'])
  }

  habilitarBotao(): string {
    if (this.formulario.valid) {
      return 'botao'
    } else {
      return 'botao__desabilitado'
    }
  }

}
