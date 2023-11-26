import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { PedidoService } from 'src/app/services/pedido.service';

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
  
  constructor (private modalService: NgbModal,
    private pedidoService: PedidoService) { }

  listarPedidos(): Pedido[] {
    return this.pedidoService.listarTodos();
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

  formatarData(data: Date): string {
    const dataObj = new Date(data);
  
    if (isNaN(dataObj.getTime())) {
      return 'Data inválida';
    }
  
    const dia = String(dataObj.getDate()).padStart(2, '0');
    const mes = String(dataObj.getMonth() + 1).padStart(2, '0'); 
    const ano = String(dataObj.getFullYear());
    const hora = String(dataObj.getHours()).padStart(2, '0');
    const minutos = String(dataObj.getMinutes()).padStart(2, '0');
  
    return `${dia}-${mes}-${ano} ${hora}:${minutos}`;
  }
}
