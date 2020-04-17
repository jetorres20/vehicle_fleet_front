import { conductor } from '../conductor/conductor';

export class Agenda{

    constructor(private fecha: Date, private reservada: Boolean, 
        private reserva: number, private conductor: conductor){}

    getFecha(): Date {return this.fecha;}
    getReservado(): Boolean {return this.reservada;}
    getReserva(): number {return this.reserva;}
    getidCond(): conductor {return this.conductor;}
}