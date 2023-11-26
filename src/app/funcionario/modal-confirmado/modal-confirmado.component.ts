import { Component, Input } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirmado',
  templateUrl: './modal-confirmado.component.html',
  styleUrls: ['./modal-confirmado.component.css']
})
export class ModalConfirmadoComponent {
  @Input() pedido!: Pedido;
  
  constructor(public activeModal: NgbActiveModal) {}
}
