export class Pedido {
  constructor(
    public idPedido: number,
    public dataPedido: Date,
    public dataEstimativa: Date,
    public dataColeta: Date,
    public dataEntrega:Date,
    public valor:number) {}
}
