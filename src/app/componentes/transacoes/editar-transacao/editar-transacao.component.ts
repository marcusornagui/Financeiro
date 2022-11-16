import { Router, ActivatedRoute } from '@angular/router';
import { Transacao } from './../transacoes';
import { Component, OnInit } from '@angular/core';
import { TransacaoService } from '../transacao.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-transacao',
  templateUrl: './editar-transacao.component.html',
  styleUrls: ['./editar-transacao.component.css']
})
export class EditarTransacaoComponent implements OnInit {

  formulario!: FormGroup

  constructor(
    private service: TransacaoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((transacao) => {
      this.formulario = this.formBuilder.group({
        id: [transacao.id],
        conteudo: [transacao.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        valor: [transacao.valor, Validators.compose([
          Validators.required,
          Validators.maxLength(8)
        ])],
        modelo: [transacao.modelo]
      })
    })
  }

  editarTransacao() {
      this.service.editar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarTransacao'])
      })
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
