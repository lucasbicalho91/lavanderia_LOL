import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-cancelar',
  templateUrl: './modal-cancelar.component.html',
  styleUrls: ['./modal-cancelar.component.css']
})
export class ModalCancelarComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal) {}

cancelar($event: any, pedido: Pedido): void {
    $event.preventDefault();
      pedido.statusPedido = "Cancelado";
      this.activeModal.close();
  }
  
}
