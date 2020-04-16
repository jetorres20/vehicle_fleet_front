export class Agenda{

    constructor(private fecha: Date, private reservado: boolean, 
        private idReserva: number, private idConductor: number, private conductor:number){}

    getFecha(): Date {return this.fecha;}
    getReservado(): boolean {return this.reservado;}
    getReserva(): number {return this.idReserva;}
    getCond(): number {return this.conductor;}
    getidCond(): number {return this.idConductor;}
}