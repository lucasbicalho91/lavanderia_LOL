import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPedidoComponent } from '../modal-pedido/modal-pedido.component';

@Component({
  selector: 'app-listagem-pedidos-cliente',
  templateUrl: './listagem-pedidos-cliente.component.html',
  styleUrls: ['./listagem-pedidos-cliente.component.css']
})
export class ListagemPedidosClienteComponent {
  statusSelecionado: string = '';
  pedidos: Pedido[] = [
    { idPedido: 1, dataPedido: '11-11-2023', dataEstimativa: '11-11-2023', dataColeta: '11-11-2023', 
      dataEntrega: '11-11-2023', valor: 30.00, statusPedido: 'Cancelado' },
    { idPedido: 2, dataPedido: '12-11-2023', dataEstimativa: '12-11-2023', dataColeta: '12-11-2023', 
    dataEntrega: '12-11-2023', valor: 49.90, statusPedido: 'Aguardando Pagamento' },
    { idPedido: 3, dataPedido: '14-11-2023', dataEstimativa: '14-11-2023', dataColeta: '14-11-2023',
  dataEntrega: '14-11-2023', valor: 40.50, statusPedido: 'Concluído' },
    { idPedido: 4, dataPedido: '15-11-2023', dataEstimativa: '15-11-2023', dataColeta: '15-11-2023',
  dataEntrega: '15-11-2023', valor: 40.50, statusPedido: 'Em Processo' },
  ];

  constructor (private modalService: NgbModal) { }

  listarPedidos(): Pedido[] {
    return this.pedidos;
  }

  cancelar($event: any, pedido: Pedido): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente cancelar o pedido 00${pedido.idPedido}?`)) {
      pedido.statusPedido = "Cancelado";
    }
  }

  pagar($event: any, pedido: Pedido): void {
    $event.preventDefault();
    if (confirm(`Confirma o pagamento do pedido 00${pedido.idPedido}?`)) {
      pedido.statusPedido = "Concluído";
    }
  }

  abrirModalPedido(pedido: Pedido) {
    const modalRef = this.modalService.open(ModalPedidoComponent);
    modalRef.componentInstance.pedido = pedido;
  }

}
