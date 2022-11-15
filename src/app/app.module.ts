import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { CriarTransacaoComponent } from './componentes/transacoes/criar-transacao/criar-transacao.component';
import { ListarTransacoesComponent } from './componentes/transacoes/listar-transacoes/listar-transacoes.component';
import { TransacaoComponent } from './componentes/transacoes/transacao/transacao.component';
import { ExcluirTransacaoComponent } from './componentes/transacoes/excluir-transacao/excluir-transacao.component';
import { EditarTransacaoComponent } from './componentes/transacoes/editar-transacao/editar-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarTransacaoComponent,
    ListarTransacoesComponent,
    TransacaoComponent,
    ExcluirTransacaoComponent,
    EditarTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
