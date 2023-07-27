import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  api_base_url !: string
  hedears !: HttpHeaders
  token !:string


  constructor(private http : HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    // this.token = JSON.stringify(localStorage.getItem('token'))
    // console.log()
  }


  getUsers() : Observable<Products[]> {
    this.hedears = new HttpHeaders ({
      "Authorization" : "Bearer",
    })
    return this.http.get<Products[]>(`${this.api_base_url}/products`,{headers : this.hedears})
  }

  getUsersById (id:number) : Observable<Products> {
    return this.http.get<Products>(`${this.api_base_url}/products/${id}`)
  }
}
