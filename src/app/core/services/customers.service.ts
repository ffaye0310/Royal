import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
import { Response } from '../interfaces/response';
import { BoundElementProperty } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  api_base_url !: string
  headers !: HttpHeaders
  token !: string
  


  constructor(private http: HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    this.token = JSON.stringify(localStorage.getItem('token'))
  }

  

  getCustomers(): Observable<Response> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response>(`${this.api_base_url}/customers?populate=logo`, { headers: this.headers })
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.api_base_url}/customers/${id}`)
  }

  addCustomer (data : FormData) : Observable<Response> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.post<Response>(`${this.api_base_url}/customers`,data,{ headers : this.headers })
  }
  
  deleteCustomer(id : number) : any {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.delete(`${this.api_base_url}/customers/${id}`,{ headers : this.headers })
  }
}
