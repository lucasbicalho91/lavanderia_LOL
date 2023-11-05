import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './lavanderia/pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './lavanderia/login/login.component';
import { CadastroComponent } from './lavanderia/cadastro/cadastro.component';
import { InicialClienteComponent } from './cliente/inicial-cliente/inicial-cliente.component';
import { ConsultaPedidoClienteComponent } from './cliente/consulta-pedido-cliente/consulta-pedido-cliente.component';
import { ListagemPedidosClienteComponent } from './cliente/listagem-pedidos-cliente/listagem-pedidos-cliente.component';
import { NovoPedidoClienteComponent } from './cliente/novo-pedido-cliente/novo-pedido-cliente.component';
import { InicialFuncionarioComponent } from './funcionario/inicial-funcionario/inicial-funcionario.component';
import { ManutencaoFuncionariosComponent } from './funcionario/manutencao-funcionarios/manutencao-funcionarios.component';
import { ManutencaoRoupasFuncionarioComponent } from './funcionario/manutencao-roupas-funcionario/manutencao-roupas-funcionario.component';
import { RelatorioFuncionarioComponent } from './funcionario/relatorio-funcionario/relatorio-funcionario.component';
import { VisualizacaoPedidosFuncionarioComponent } from './funcionario/visualizacao-pedidos-funcionario/visualizacao-pedidos-funcionario.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cliente/inicial', component: InicialClienteComponent },
  { path: 'cliente/consulta', component: ConsultaPedidoClienteComponent },
  { path: 'cliente/pedido/listagem', component: ListagemPedidosClienteComponent },
  { path: 'cliente/pedido/novo', component: NovoPedidoClienteComponent },
  { path: 'funcionario/inicial', component: InicialFuncionarioComponent },
  { path: 'funcionario/manutencaoFuncionarios', component: ManutencaoFuncionariosComponent },
  { path: 'funcionario/manutencaoRoupas', component: ManutencaoRoupasFuncionarioComponent },
  { path: 'funcionario/relatorios', component: RelatorioFuncionarioComponent },
  { path: 'funcionario/visualizacao', component: VisualizacaoPedidosFuncionarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
