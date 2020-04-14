export class Encuesta{


    constructor(private pID: number, private pIDProfesor:number, private pCalificacion:Number, private pComentario: String ){}
    
    get id():number{return this.pID;}
    get idProfesor():Number { return this.pIDProfesor;}
    get calificacion():Number {return this.pCalificacion;}
    get comentario():String { return this.pComentario};


}