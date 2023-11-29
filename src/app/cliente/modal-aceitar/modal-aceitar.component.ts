import { Component, Input } from '@angular/core';

import { Pedido } from 'src/app/shared';
import { PedidoService } from 'src/app/services/pedido.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalDadosPedidoComponent } from '../modal-dados-pedido/modal-dados-pedido.component';

@Component({
  selector: 'app-modal-aceitar',
  templateUrl: './modal-aceitar.component.html',
  styleUrls: ['./modal-aceitar.component.css']
})
export class ModalAceitarComponent {
  @Input() pedido!: Pedido;

  constructor(
        public activeModal: NgbActiveModal,
        private modalService: NgbModal,
        private pedidoService: PedidoService) {}

    realizarPedido(pedido: Pedido): void {
      this.pedidoService.inserir(pedido);
      this.activeModal.close();
      this.abrirModalDadosPedido(this.pedido);
    }

    abrirModalDadosPedido(pedido: Pedido) {
      const modalRef = this.modalService.open(ModalDadosPedidoComponent);
      modalRef.componentInstance.pedido = pedido;
    }
}
