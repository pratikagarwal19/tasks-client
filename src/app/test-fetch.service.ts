import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Day } from './day';

const baseUrl = 'http://localhost:3000/days/';

@Injectable({
  providedIn: 'root'
})
export class TestFetchService {

  constructor(private http: HttpClient) { }

  get(id:string): Observable<any> {
    console.log("GET");
    console.log(baseUrl+id.toString());
    return this.http.get(baseUrl+id.toString());
  }

  create(data: Day,id:string): Observable<any> {
    console.log("POST");
    console.log(baseUrl+id.toString());
    console.log(JSON.stringify(data));
    return this.http.post(baseUrl+id.toString(),data);
  }

}
