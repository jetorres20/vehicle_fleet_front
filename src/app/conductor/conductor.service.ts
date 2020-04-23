import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { conductor } from './conductor';
import { environment } from 'src/environments/environment';
import { ConductorDetail } from './conductorDetail';

@Injectable({
  providedIn: 'root'
})
export class ConductorService {

private apiUrl = environment.baseUrl +'conductores';

constructor(private http:HttpClient) { }

getConductores(): Observable<Array<ConductorDetail>>{
  return this.http.get<Array<ConductorDetail>>(this.apiUrl);
}

}
