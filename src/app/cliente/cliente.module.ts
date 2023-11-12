import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialClienteComponent } from './inicial-cliente/inicial-cliente.component';
import { ConsultaPedidoClienteComponent } from './consulta-pedido-cliente/consulta-pedido-cliente.component';
import { ListagemPedidosClienteComponent } from './listagem-pedidos-cliente/listagem-pedidos-cliente.component';
import { NovoPedidoClienteComponent } from './novo-pedido-cliente/novo-pedido-cliente.component';
import { LavanderiaModule } from '../lavanderia';



@NgModule({
  declarations: [
    InicialClienteComponent,
    ConsultaPedidoClienteComponent,
    ListagemPedidosClienteComponent,
    NovoPedidoClienteComponent
  ],
  imports: [
    CommonModule,
    LavanderiaModule
  ]
})
export class ClienteModule { }
