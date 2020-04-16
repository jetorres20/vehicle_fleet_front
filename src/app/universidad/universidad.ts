export class Universidad {

    constructor(private idA:number,private nameA:String,private cityA:String,private privadaA:boolean){
    }

    get id():number{return this.id;}

    get name ():String{return this.nameA;}

    get city():String{return this.cityA;}

    get privada():boolean{return this.privadaA;}

}
