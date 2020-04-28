export class Encuesta{


    constructor(private pID: number, private pIDProfesor:number, private pCalificacion:Number, private pComentario: String, private pIDReserva: number ){}
    
    get id():number{return this.pID;}
    get idProfesor():Number { return this.pIDProfesor;}
    get calificacion():Number {return this.pCalificacion;}
    get comentario():String { return this.pComentario};
    get idReserva(): Number { return this.pIDReserva};

}