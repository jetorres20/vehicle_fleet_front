import { Injectable } from '@angular/core';
import { HttpCLient, HttpClient } from '@angular/common/http'
import { FranjaHorariaSemanal } from './franjaHorariaSemanal'
 
@Injectable({
  providedIn: 'root'
})
export class FranjaHorariaSemanalService {

  constructor(private client:HttpClient){
  }

  

}
