import { Observable } from 'rxjs';
import { Injectable, ɵɵsanitizeResourceUrl } from '@angular/core';
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

  

  getCustomers(): Observable<Response<Customer>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Customer>>(`${this.api_base_url}/customers?populate=logo`, { headers: this.headers })
  }

  getCustomerById(id: number): Observable<Response<Customer>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Customer>>(`${this.api_base_url}/customers/${id}?populate=logo`,{ headers: this.headers })
  }

  addCustomer (data : FormData) : Observable<Response<Customer>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.post<Response<Customer>>(`${this.api_base_url}/customers`,data,{ headers : this.headers })
  }

  update (id: number,data : FormData) : Observable<Response<Customer>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.put<Response<Customer>>(`${this.api_base_url}/customers/${id}`,data,{ headers : this.headers })
  }
  
  
  deleteCustomer(id : number) : Observable<Response<Customer>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.delete<Response<Customer>>(`${this.api_base_url}/customers/${id}`,{ headers : this.headers })
  }
}
