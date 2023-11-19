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
    { idPedido: 1, dataPedido: new Date('2023-09-15T14:30:00'), dataEstimativa: new Date('2023-09-15T15:45:00'), dataColeta: new Date('2023-09-15T16:30:00'), 
      dataEntrega: new Date('2023-09-15T18:00:00'), valor: 30.00, statusPedido: 'Em Aberto' },
    { idPedido: 2, dataPedido: new Date('2023-09-20T10:00:00'), dataEstimativa: new Date('2023-09-20T11:15:00'), dataColeta: new Date('2023-09-20T12:30:00'), 
      dataEntrega: new Date('2023-09-20T14:00:00'), valor: 49.90, statusPedido: 'Cancelado' },
    { idPedido: 3, dataPedido: new Date('2023-10-05T08:45:00'), dataEstimativa: new Date('2023-10-05T10:00:00'), dataColeta: new Date('2023-10-05T11:15:00'), 
      dataEntrega: new Date('2023-10-05T12:30:00'), valor: 40.50, statusPedido: 'Recolhido' },
    { idPedido: 4, dataPedido: new Date('2023-10-10T13:15:00'), dataEstimativa: new Date('2023-10-10T14:30:00'), dataColeta: new Date('2023-10-10T15:45:00'), 
      dataEntrega: new Date('2023-10-10T17:00:00'), valor: 110.50, statusPedido: 'Aguardando Pagamento' },
    { idPedido: 5, dataPedido: new Date('2023-11-01T09:30:00'), dataEstimativa: new Date('2023-11-01T10:45:00'), dataColeta: new Date('2023-11-01T12:00:00'), 
      dataEntrega: new Date('2023-11-01T13:15:00'), valor: 60.89, statusPedido: 'Pago' },
    { idPedido: 6, dataPedido: new Date('2023-11-15T16:45:00'), dataEstimativa: new Date('2023-11-15T18:00:00'), dataColeta: new Date('2023-11-15T19:15:00'), 
      dataEntrega: new Date('2023-11-15T20:30:00'), valor: 10.80, statusPedido: 'Finalizado' }
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

}
