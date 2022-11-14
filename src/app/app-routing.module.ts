import { EditarTransacaoComponent } from './componentes/transacoes/editar-transacao/editar-transacao.component';
import { ExcluirTransacaoComponent } from './componentes/transacoes/excluir-transacao/excluir-transacao.component';
import { ListarTransacoesComponent } from './componentes/transacoes/listar-transacoes/listar-transacoes.component';
import { CriarTransacaoComponent } from './componentes/transacoes/criar-transacao/criar-transacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarTransacao',
    pathMatch: 'full'
  },
  {
    path: 'criarTransacao',
    component: CriarTransacaoComponent
  },
  {
    path: 'listarTransacao',
    component: ListarTransacoesComponent
  },
  {
    path: 'transacoes/excluirTransacao/:id',
    component: ExcluirTransacaoComponent
  },
  {
    path: 'transacoes/editarTransacao/:id',
    component: EditarTransacaoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
