import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal) {}

pagar($event: any, pedido: Pedido): void {
    $event.preventDefault();
      pedido.statusPedido = "Pago";
      this.activeModal.close();
  }
  
}
