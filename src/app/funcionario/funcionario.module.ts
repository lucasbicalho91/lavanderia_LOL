import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialFuncionarioComponent } from './inicial-funcionario/inicial-funcionario.component';
import { ManutencaoFuncionariosComponent } from './manutencao-funcionarios/manutencao-funcionarios.component';
import { ManutencaoRoupasFuncionarioComponent } from './manutencao-roupas-funcionario/manutencao-roupas-funcionario.component';
import { RelatorioFuncionarioComponent } from './relatorio-funcionario/relatorio-funcionario.component';
import { VisualizacaoPedidosFuncionarioComponent } from './visualizacao-pedidos-funcionario/visualizacao-pedidos-funcionario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateFormatFuncionarioPipe } from '../shared/pipes/date-format-funcionario.pipe';
import { ModalRecolhimentoComponent } from './modal-recolhimento/modal-recolhimento.component';
import { ModalConfirmadoComponent } from './modal-confirmado/modal-confirmado.component';

@NgModule({
  declarations: [
    InicialFuncionarioComponent,
    ManutencaoFuncionariosComponent,
    ManutencaoRoupasFuncionarioComponent,
    RelatorioFuncionarioComponent,
    VisualizacaoPedidosFuncionarioComponent,
    DateFormatFuncionarioPipe,
    ModalRecolhimentoComponent,
    ModalConfirmadoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class FuncionarioModule { }
