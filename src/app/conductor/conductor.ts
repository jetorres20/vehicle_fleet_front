export class conductor{

    constructor(private id: number, private name:string, private idConductor: number){}

getid(): number{return this.id;}
getName(): string{return this.name;}
getIdentificacion(): number{return this.idConductor}
}