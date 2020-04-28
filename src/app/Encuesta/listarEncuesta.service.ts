import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Encuesta } from './Encuesta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListarEncuestaService {
  private apiUrl = environment.baseUrl + 'encuestas';

constructor(private http: HttpClient) { }
getEncuestas(): Observable<Encuesta[]> {
  return this.http.get<Encuesta[]>(this.apiUrl);
}
}
