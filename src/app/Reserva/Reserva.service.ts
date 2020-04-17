import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Reserva } from './Reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

private apiUrl = environment.baseUrl + 'reservas';
constructor(private http: HttpClient) { }

getReservas(): Observable<Reserva[]> {
  
  return this.http.get<Reserva[]>(this.apiUrl);
}
}
