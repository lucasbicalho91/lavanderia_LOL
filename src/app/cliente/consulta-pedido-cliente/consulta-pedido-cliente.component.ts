import { Component } from '@angular/core';
import { Pedido, RoupasPedido } from 'src/app/shared';

@Component({
  selector: 'app-consulta-pedido-cliente',
  templateUrl: './consulta-pedido-cliente.component.html',
  styleUrls: ['./consulta-pedido-cliente.component.css']
})
export class ConsultaPedidoClienteComponent {
roupas: RoupasPedido[] = [
{idPedido: 1, idRoupa: 34, nomeRoupa: 'Camiseta', valorLavagemPeca: 20.00},
{idPedido: 1, idRoupa: 34, nomeRoupa: 'Camiseta', valorLavagemPeca: 20.00},
{idPedido: 1, idRoupa: 36, nomeRoupa: 'Short', valorLavagemPeca: 10.00},
{idPedido: 2, idRoupa: 34, nomeRoupa: 'Camiseta', valorLavagemPeca: 20.00},
{idPedido: 2, idRoupa: 34, nomeRoupa: 'Calça', valorLavagemPeca: 30.00},
{idPedido: 2, idRoupa: 34, nomeRoupa: 'Cueca', valorLavagemPeca: 12.00}
];

pedidos: Pedido[] = [
  {idPedido: 1, dataPedido: new Date('2023-11-10T17:00:00'), dataEstimativa: new Date('2023-11-15T17:00:00'), dataColeta: new Date('2023-11-12T17:00:00'), dataEntrega: new Date('2023-11-14T17:00:00'), valor: 50.00, statusPedido: 'Finalizado'},
  {idPedido: 2, dataPedido: new Date('2023-11-12T17:00:00'), dataEstimativa: new Date('2023-11-20T17:00:00'), dataColeta: new Date('2023-11-13T17:00:00'), dataEntrega: new Date(''), valor: 62.00, statusPedido: 'Em Andamento'}
];

roupa: RoupasPedido | undefined;
pedido: number | null = null;
detalhesPedido: Pedido = {};
roupasPedido: RoupasPedido | undefined;

buscarPedido(pedidoNumero?: number) {
  const pedidoEncontrado = this.pedidos.filter(p => p.idPedido === pedidoNumero);
  if (pedidoEncontrado.length > 0) {
    this.detalhesPedido = pedidoEncontrado[0];
  } else {
    this.detalhesPedido = {};
  }
}

listarPedidos() {
  return this.roupas.filter(r => r.idPedido === this.pedido);
}

}

