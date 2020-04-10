import { Registro } from '../Registro/Registro';

export class Vehiculo {

    constructor(private idA: number, private marcaA:String, private modeloA:String, private capadidadA: number,
        private placaA: String, private registroA:Registro ){}
    
    get id():number{return this.idA;}
    get marca():String { return this.marcaA;}
    get modelo():String {return this.modeloA;}
    get capacidad():number{return this.capacidad;}
    get placa(): String {return this.placaA;}
    get registro():Registro {return this.registroA;}
}
