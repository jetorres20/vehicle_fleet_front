import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estudiante } from './Estudiante';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarEstudianteService {
private apiUrl = environment.baseUrl + 'estudiantes.json';
constructor(private http: HttpClient) { }
getEstudiantes(): Observable<Estudiante[]> {
  return this.http.get<Estudiante[]>(this.apiUrl);
}
}
