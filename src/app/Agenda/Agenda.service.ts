import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Agenda } from './Agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private apiUrl = environment.baseUrl + 'conductores/101/agendas';
constructor(private http: HttpClient) { }
  getAgendas(): Observable<Agenda[]> {
    return this.http.get<Agenda[]>(this.apiUrl);
  }
  
}
