import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoVehiculo } from './tipoVehiculo';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {

private apiUrl = environment.baseUrl + 'tipoVehiculos';
constructor(private http: HttpClient) { }

getTipoVehiculos(): Observable<TipoVehiculo[]> {
  
  return this.http.get<TipoVehiculo[]>(this.apiUrl);
}

}
