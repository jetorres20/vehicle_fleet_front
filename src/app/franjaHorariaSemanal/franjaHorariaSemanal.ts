// import { Conductor } from '../conductor/conductor';

export class FranjaHorariaSemanal {

    constructor(private idA:Number,private startHourA:any,private finishHourA:any,private conductorA:any) { }

    get id():Number{return this.idA;}

    get startHour():any{return this.startHourA;}

    get finishHour():any{return this.finishHourA;}

    get conductor():any{return this.conductorA;}
}
