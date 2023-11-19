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
  {idPedido: 1, dataPedido: '12/03/2023', dataEstimativa: '16/03/2023', dataColeta: '12/03/2023', dataEntrega: '15/03/2023', valor: 50.00, statusPedido: 'Finalizado'},
  {idPedido: 2, dataPedido: '10/11/2023', dataEstimativa: '21/11/2023', dataColeta: '11/11/2023', dataEntrega: '', valor: 62.00, statusPedido: 'Em Andamento'}
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

