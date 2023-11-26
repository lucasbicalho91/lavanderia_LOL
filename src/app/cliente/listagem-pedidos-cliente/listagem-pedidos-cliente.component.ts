import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPedidoComponent } from '../modal-pedido/modal-pedido.component';

import { ModalCancelarComponent } from '../modal-cancelar/modal-cancelar.component';

@Component({
  selector: 'app-listagem-pedidos-cliente',
  templateUrl: './listagem-pedidos-cliente.component.html',
  styleUrls: ['./listagem-pedidos-cliente.component.css']
})
export class ListagemPedidosClienteComponent {
  statusSelecionado: string = '';
  pedidos: Pedido[] = [
    { idPedido: 1, dataPedido: new Date('2023-09-15T14:30:00'), dataEstimativa: new Date('2023-09-15T14:30:00'), dataColeta: new Date('2023-09-15T14:30:00'), 
      dataEntrega: new Date('2023-09-15T14:30:00'), valor: 30.00, statusPedido: 'Em Aberto' },
    { idPedido: 2, dataPedido: new Date('2023-09-20T10:00:00'), dataEstimativa: new Date('2023-09-20T10:00:00'), dataColeta: new Date('2023-09-20T10:00:00'), 
      dataEntrega: new Date('2023-09-20T10:00:00'), valor: 49.90, statusPedido: 'Cancelado' },
    { idPedido: 3, dataPedido: new Date('2023-10-05T08:45:00'), dataEstimativa: new Date('2023-10-05T08:45:00'), dataColeta: new Date('2023-10-05T08:45:00'), 
      dataEntrega: new Date('2023-10-05T08:45:00'), valor: 40.50, statusPedido: 'Recolhido' },
    { idPedido: 4, dataPedido: new Date('2023-10-10T13:15:00'), dataEstimativa: new Date('2023-10-10T13:15:00'), dataColeta: new Date('2023-10-10T13:15:00'), 
      dataEntrega: new Date('2023-10-10T13:15:00'), valor: 110.50, statusPedido: 'Aguardando Pagamento' },
    { idPedido: 5, dataPedido: new Date('2023-11-01T09:30:00'), dataEstimativa: new Date('2023-11-01T09:30:00'), dataColeta: new Date('2023-11-01T09:30:00'), 
      dataEntrega: new Date('2023-11-01T09:30:00'), valor: 60.89, statusPedido: 'Pago' },
    { idPedido: 6, dataPedido: new Date('2023-11-15T16:45:00'), dataEstimativa: new Date('2023-11-15T16:45:00'), dataColeta: new Date('2023-11-15T16:45:00'), 
      dataEntrega: new Date('2023-11-15T16:45:00'), valor: 10.80, statusPedido: 'Finalizado' },
    { idPedido: 7, dataPedido: new Date('2023-08-15T14:30:00'), dataEstimativa: new Date('2023-08-15T14:30:00'), dataColeta: new Date('2023-08-15T14:30:00'), 
      dataEntrega: new Date('2023-08-15T14:30:00'), valor: 60.00, statusPedido: 'Em Aberto' },
    { idPedido: 8, dataPedido: new Date('2023-09-22T14:30:00'), dataEstimativa: new Date('2023-09-22T14:30:00'), dataColeta: new Date('2023-09-22T14:30:00'), 
      dataEntrega: new Date('2023-09-22T14:30:00'), valor: 80.00, statusPedido: 'Em Aberto' },
    { idPedido: 9, dataPedido: new Date('2023-11-25T14:30:00'), dataEstimativa: new Date('2023-11-25T14:30:00'), dataColeta: new Date('2023-11-25T14:30:00'), 
      dataEntrega: new Date('2023-11-25T14:30:00'), valor: 20.00, statusPedido: 'Em Aberto' },
  ];
  
  constructor (private modalService: NgbModal) { }

  listarPedidos(): Pedido[] {
    return this.pedidos;
  }

  abrirModalPedido(pedido: Pedido) {
    const modalRef = this.modalService.open(ModalPedidoComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  abrirModalCancelar(pedido: Pedido) {
    const modalRef = this.modalService.open(ModalCancelarComponent);
    modalRef.componentInstance.pedido = pedido;
  }

  ordenarPedidos(): Pedido[] {
    const pedidosOrdenados = this.listarPedidos().slice();
    pedidosOrdenados.sort((a, b) => {
      const dataA = a.dataPedido ? new Date(a.dataPedido).getTime() : 0;
      const dataB = b.dataPedido ? new Date(b.dataPedido).getTime() : 0;
      return dataB - dataA;
    });
    return pedidosOrdenados;
  }

}
