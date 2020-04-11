import { Profesor } from '../Profesor/Profesor';
export class Practica {
    constructor(private idA: number, private pDestino:String, private pDescripcion:String ,
        private pTiempoDeDesplazamiento:Number,private pDuracion:Number,private pProfesor:Profesor){}
    
    get id():number{return this.idA;}
    get destino():String { return this.pDestino;}
    get descripcion():String {return this.pDescripcion;}
    get tiempoDeDesplazamiento():Number {return this.pTiempoDeDesplazamiento;}
    get duracion():Number {return this.duracion;}
    
    get profesor():Profesor {return this.profesor;  }
   
}
