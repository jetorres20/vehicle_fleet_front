export class Registro {

    constructor(private idA:number, private rtmA: Date, private soatA: Date, private prscA: Date, 
                private prseA :Date, private vigenteA :Boolean){

    }
    
    get id():number{return this.idA};
    get rtm():Date{return this.rtmA};
    get soat(): Date { return this.soatA};
    get prsc():Date {return this.prscA};
    get prse():Date{return this.prseA};
    get vigente():Boolean{return this.vigenteA};
}
