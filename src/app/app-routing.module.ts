import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaInicialComponent } from './lavanderia/pagina-inicial/pagina-inicial.component';
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

import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '',
  redirectTo: 'inicial',
  pathMatch: 'full' },

  { path: 'inicial', component: PaginaInicialComponent },
  { path: 'cadastro', component: CadastroComponent },

  { path: 'cliente',
  redirectTo: 'cliente/inicial' },

  { path: 'cliente/inicial', component: InicialClienteComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'CLIENTE'
    } 
  },

  { path: 'cliente/consulta', component: ConsultaPedidoClienteComponent, 
  canActivate: [AuthGuard],
  data: {
    role: 'CLIENTE'
    } 
  },

  { path: 'cliente/pedido/listagem', component: ListagemPedidosClienteComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'CLIENTE'
    }  
  },

  { path: 'cliente/pedido/novo', component: NovoPedidoClienteComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'CLIENTE'
    }  
  },

  { path: 'funcionario',
  redirectTo: 'funcionario/inicial' },

  { path: 'funcionario/inicial', component: InicialFuncionarioComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'FUNCIONARIO'
    }  
  },

  { path: 'funcionario/manutencaoFuncionarios', component: ManutencaoFuncionariosComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'FUNCIONARIO'
    }   },

  { path: 'funcionario/manutencaoRoupas', component: ManutencaoRoupasFuncionarioComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'FUNCIONARIO'
    }   
  },

  { path: 'funcionario/relatorios', component: RelatorioFuncionarioComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'FUNCIONARIO'
    }   
  },

  { path: 'funcionario/visualizacao', component: VisualizacaoPedidosFuncionarioComponent,
  canActivate: [AuthGuard],
  data: {
    role: 'FUNCIONARIO'
    }   
  },

  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
