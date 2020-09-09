import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Day } from '../models/day';


const baseUrl = 'http://localhost:3000/days/';

@Injectable({
  providedIn: 'root'
})
export class TestFetchService {

  constructor(private http: HttpClient) { }

  get(id:string): Observable<any> {    
    return this.http.get(baseUrl+id.toString());
  }

  create(data: Day,id:string): Observable<any> {
    return this.http.post(baseUrl+id.toString(),data);
  }

}
