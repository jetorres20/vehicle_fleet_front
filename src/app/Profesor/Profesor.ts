export class Profesor {
    constructor(private idA: number, private pNombre:String, private pIdentificacion:Number ){}
    
    get id():number{return this.idA;}
    get nombre():String { return this.pNombre;}
    get identificacion():Number {return this.pIdentificacion;}
   
}
