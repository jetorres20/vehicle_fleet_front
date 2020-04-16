import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Universidad } from './universidad';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UniversidadService {

  private apiUrl=environment.baseUrl+"universidad";

  constructor(private client:HttpClient) { }

  getUniversidades():Observable<Universidad[]>{
    return this.client.get<Universidad[]>(this.apiUrl);
  }

  getUniversidad(id:Number):Observable<Universidad>{
    return this.client.get<Universidad>(this.apiUrl+"/"+id);
  }

  createUniversidad(universidad:Universidad):Observable<Universidad>{
    return this.client.post<Universidad>(this.apiUrl,universidad);
  }

  putUniversiddad(universidad:Universidad):Observable<Universidad>{
    return this.client.put<Universidad>(this.apiUrl+"/"+universidad.id,universidad);
  }

  deleteUniversidad(id:Number){
    this.client.delete(this.apiUrl+id);
  }

}
