import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InicialClienteComponent } from './inicial-cliente/inicial-cliente.component';
import { ConsultaPedidoClienteComponent } from './consulta-pedido-cliente/consulta-pedido-cliente.component';
import { ListagemPedidosClienteComponent } from './listagem-pedidos-cliente/listagem-pedidos-cliente.component';
import { NovoPedidoClienteComponent } from './novo-pedido-cliente/novo-pedido-cliente.component';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';

import { ModalCancelarComponent } from './modal-cancelar/modal-cancelar.component';
import { LavanderiaModule } from '../lavanderia';
import { RouterModule } from '@angular/router';
import { StatusFilterPipe } from '../shared/pipes/meu-pipe.pipe';
import { DateFormatClientePipe } from '../shared/pipes/date-format-cliente.pipe';

@NgModule({
  declarations: [
    InicialClienteComponent,
    ConsultaPedidoClienteComponent,
    ListagemPedidosClienteComponent,
    NovoPedidoClienteComponent,
    ModalPedidoComponent,
    ModalCancelarComponent,
    StatusFilterPipe,
    DateFormatClientePipe
  ],
  imports: [
    CommonModule,
    LavanderiaModule,
    RouterModule,
    FormsModule,
  ]
})
export class ClienteModule { }
