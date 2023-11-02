import { Sales } from './../models/sales.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '../interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  api_base_url !: string
  headers !: HttpHeaders
  token !: string
  


  constructor(private http: HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    this.token = JSON.stringify(localStorage.getItem('token'))
  }

  

  getSales(): Observable<Response<Sales>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Sales>>(`${this.api_base_url}/sales?populate=logo`, { headers: this.headers })
  }

  getSaleById(id: number): Observable<Response<Sales>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Sales>>(`${this.api_base_url}/sales/${id}?populate=logo`,{ headers: this.headers })
  }

  addSale (data : FormData) : Observable<Response<Sales>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.post<Response<Sales>>(`${this.api_base_url}/sales`,data,{ headers : this.headers })
  }

  update (id: number,data : FormData) : Observable<Response<Sales>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.put<Response<Sales>>(`${this.api_base_url}/sales/${id}`,data,{ headers : this.headers })
  }
  
  
  deleteSale(id : number) : Observable<Response<Sales>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.delete<Response<Sales>>(`${this.api_base_url}/sales/${id}`,{ headers : this.headers })
  }
}
