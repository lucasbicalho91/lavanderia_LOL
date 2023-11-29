import { Component, Input } from '@angular/core';

import { Pedido } from 'src/app/shared';
import { PedidoService } from 'src/app/services/pedido.service';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-aceitar',
  templateUrl: './modal-aceitar.component.html',
  styleUrls: ['./modal-aceitar.component.css']
})
export class ModalAceitarComponent {
  @Input() pedido!: Pedido;

  constructor(public activeModal: NgbActiveModal,
    private pedidoService: PedidoService) {}

    realizarPedido(obj: Pedido): void {
      this.pedidoService.inserir(obj);
      this.activeModal.close();
    }
}
