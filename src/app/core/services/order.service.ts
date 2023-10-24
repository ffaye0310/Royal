import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { Response } from '../interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class OrderService {

 
  api_base_url !: string
  headers !: HttpHeaders
  token !: string
  


  constructor(private http: HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    this.token = JSON.stringify(localStorage.getItem('token'))
  }

  

  getOrders(): Observable<Response<Order>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Order>>(`${this.api_base_url}/orders?populate=*`, { headers: this.headers })
  }

  getOrderById(id: number): Observable<Response<Order>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`
    })
    return this.http.get<Response<Order>>(`${this.api_base_url}/order/${id}?populate=*`,{ headers: this.headers })
  }

  addOrder (data : FormData) : Observable<Response<Order>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.post<Response<Order>>(`${this.api_base_url}/order`,data,{ headers : this.headers })
  }

  update (id: number,data : FormData) : Observable<Response<Order>> {
   
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.put<Response<Order>>(`${this.api_base_url}/order/${id}`,data,{ headers : this.headers })
  }
  
  
  deleteOrder(id : number) : Observable<Response<Order>> {
    this.headers = new HttpHeaders({
      "Authorization": `Bearer ${JSON.parse(this.token)}`,    
    })
    return this.http.delete<Response<Order>>(`${this.api_base_url}/order/${id}`,{ headers : this.headers })
  }
}
