export class conductor{

    constructor(private idDB: number, private name:string, private identificacion: number){}

getid(): number{return this.idDB;}
getName(): string{return this.name;}
getIdentificacion(): number{return this.identificacion}
}