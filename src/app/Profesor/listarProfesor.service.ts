import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import {Profesor} from './Profesor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarProfesorService {
private apiUrl = environment.baseUrl + 'profesores';
constructor(private http: HttpClient) { }

getProfesores(): Observable<Profesor[]> {
  return this.http.get<Profesor[]>(this.apiUrl);
}
}
