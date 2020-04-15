import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { conductor } from './conductor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

private apiUrl = environment.baseUrl +'conductores';

constructor(private http:HttpClient) { }

getConductores(): Observable<conductor[]>{
  return this.http.get<conductor[]>(this.apiUrl);
}

}
