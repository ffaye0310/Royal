import { Sales } from './../models/sales.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {


  api_base_url !: string
  hedears !: HttpHeaders
  token !:string


  constructor(private http : HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    // this.token = JSON.stringify(localStorage.getItem('token'))
    // console.log()
  }


  getSales() : Observable<Sales[]> {
    this.hedears = new HttpHeaders ({
      "Authorization" : "Bearer",
    })
    return this.http.get<Sales[]>(`${this.api_base_url}/sales`,{headers : this.hedears})
  }

  getUsersById (id:number) : Observable<Sales> {
    return this.http.get<Sales>(`${this.api_base_url}/sales/${id}`)
  }
}
