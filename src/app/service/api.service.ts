import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private urlrick='https://rickandmortyapi.com/api/character/1,2,3,4';
 private urlthrone="https://thronesapi.com/api/v2/Characters/2";
  constructor( private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlrick);
 
  }
  public getData1(): Observable<any>{
    return this.http.get<any>(this.urlthrone);
 
  }

}
