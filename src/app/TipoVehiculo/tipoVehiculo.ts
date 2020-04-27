export class TipoVehiculo {

    constructor(private idA: number, private tipo: string) { }

    get id():number{return this.idA;}
    get tipoDeVehiculo(): string { return this.tipo; }
}
