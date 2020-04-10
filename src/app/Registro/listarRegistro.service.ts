import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import{Registro} from './Registro';

@Injectable({
  providedIn: 'root'
})
export class ListarRegistroService {

  private apiUrl = environment.baseUrl + 'registros';
  
  constructor(private http: HttpClient) { }

  getRegistros(): Observable<Registro[]> {
    return this.http.get<Registro[]>(this.apiUrl);
  }

}
