import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { PedidoService } from 'src/app/services/pedido.service';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmadoComponent } from '../modal-confirmado/modal-confirmado.component';

@Component({
  selector: 'app-modal-recolhimento',
  templateUrl: './modal-recolhimento.component.html',
  styleUrls: ['./modal-recolhimento.component.css']
})
export class ModalRecolhimentoComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal, 
              private modalService: NgbModal, 
              private pedidoService: PedidoService) {}

  recolher($event: any, pedido: Pedido): void {
    $event.preventDefault();
    this.activeModal.close();
    this.abrirModalConfirmado(pedido)
      pedido.statusPedido = "Recolhido";
      this.pedidoService.atualizar(this.pedido);
  }

  abrirModalConfirmado(pedido: Pedido) {
    const modalRef = this.modalService.open(ModalConfirmadoComponent);
    modalRef.componentInstance.pedido = pedido;
  }
}
