export class Reserva {

    constructor(private fechaReserva: any, private fechaServicio: any, 
        private motivoCancelacion: string, private estadoValidacion: boolean,
        private reservaRecurrente: boolean, private cancelada: boolean) { }

get motivoDeCancelacion(): string { return this.motivoCancelacion; }
get fechaDeReserva(): any { return this.fechaReserva; }
get fechaDeServicio(): any { return this.fechaServicio; }
get estadoDeValidacion(): boolean {return this.estadoValidacion;}
get reservaEsRecurrente(): boolean {return this.reservaRecurrente;}
get reservaCancelada(): boolean {return this.cancelada;}

}
