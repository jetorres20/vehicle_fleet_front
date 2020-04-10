import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Vehiculo} from './Vehiculo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarVehiculosService {
private apiUrl = environment.baseUrl + 'vehiculos';
constructor(private http: HttpClient) { }

getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.apiUrl);
}
}
