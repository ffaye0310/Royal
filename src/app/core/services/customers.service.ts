import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/customer.model';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  api_base_url !: string
  hedears !: HttpHeaders
  token !: string


  constructor(private http: HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    // this.token = JSON.stringify(localStorage.getItem('token'))
    // console.log()
  }


  getCustomers(): Observable<Customer[]> {
    this.hedears = new HttpHeaders({
      "Authorization": "Bearer",
    })
    return this.http.get<Customer[]>(`${this.api_base_url}/customers`, { headers: this.hedears })
  }

  getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.api_base_url}/customers/${id}`)
  }
}
