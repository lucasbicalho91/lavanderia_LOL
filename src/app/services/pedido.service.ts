import { Injectable } from '@angular/core';

import { Pedido } from '../shared';

const LS_CHAVE: string = "Pedidos";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  listarTodos(): Pedido[] {
    const PedidosLocalStorage = localStorage[LS_CHAVE];
    const PedidosCadastradas: Pedido[] = [
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
    let Pedidos = PedidosLocalStorage ? JSON.parse(PedidosLocalStorage) : [];
    const PedidosCadastradasAdicionadas = Pedidos.some(
      (cadastrado: Pedido) => PedidosCadastradas.some((c) => c.idPedido === cadastrado.idPedido));
      if (!PedidosCadastradasAdicionadas) {
    Pedidos = Pedidos.concat(PedidosCadastradas); 
      }
  return Pedidos;
  }

  inserir(Pedido: Pedido): void {
    const Pedidos = this.listarTodos();
    const novoId = Math.max(...Pedidos.map(Pedido => (Pedido.idPedido || 0)), 0) + 1;
    Pedido.idPedido = novoId;
    Pedidos.push(Pedido);
    localStorage[LS_CHAVE] = JSON.stringify(Pedidos);
  }

  buscarPorId (id: number): Pedido | undefined {
    //Obtém a lista completa de estados
    const estados: Pedido[] = this.listarTodos();
    return estados.find(Pedido => Pedido.idPedido === id);
  }

  atualizar(pedido: Pedido): void {
    const pedidos: Pedido[] = this.listarTodos();
    pedidos.forEach( (obj, index, objs) => {
      if (pedido.idPedido === obj.idPedido) {
        objs[index] = pedido;
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }
  
  remover(id: number): void {
    let Pedidos: Pedido[] = this.listarTodos();
    Pedidos = Pedidos.filter(Pedido => Pedido.idPedido !== id);
    localStorage[LS_CHAVE] = JSON.stringify(Pedidos);
  }
}
