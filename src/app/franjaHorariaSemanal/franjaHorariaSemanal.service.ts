import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FranjaHorariaSemanal } from './franjaHorariaSemanal'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FranjaHorariaSemanalService {

  private apiUrl=environment.baseUrl+"franja";

  constructor(private client:HttpClient){
  }

  getFranjas():Observable<FranjaHorariaSemanal[]>{
    return this.client.get<FranjaHorariaSemanal[]>(this.apiUrl);
  }

  

}
