export class Pedido {
  constructor(
    public idPedido: number,
    public dataPedido: string,
    public dataEstimativa: string,
    public dataColeta: string,
    public dataEntrega: string,
    public valor: number,
    public statusPedido: string) {}
}
