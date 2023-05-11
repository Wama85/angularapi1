import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 private urlAPi='https://rickandmortyapi.com/api/character/1,2,3,4';

  constructor( private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlAPi);
  }

}
