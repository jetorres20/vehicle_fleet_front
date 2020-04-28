import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { EstudianteDetalle } from './estudianteDetalle';

@Injectable({
  providedIn: 'root'
})
export class ListarEstudianteService {
private apiUrl = environment.baseUrl + 'estudiantes';
constructor(private http: HttpClient) { }
getEstudiantes(): Observable<EstudianteDetalle[]> {
  return this.http.get<EstudianteDetalle[]>(this.apiUrl);
}
}
