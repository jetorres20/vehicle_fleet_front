export class Estudiante {
    constructor(private idE: number, private pNombre:String, private pCodigo:Number ){}
    
    get id():number{return this.idE;}
    get nombre():String { return this.pNombre;}
    get codigo():Number {return this.pCodigo;}
   
}