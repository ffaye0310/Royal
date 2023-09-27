import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import { Response } from '../interfaces/response';
  
@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  api_base_url !: string
  hedears !: HttpHeaders
  token !:string


  constructor(private http: HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    this.token = JSON.stringify(localStorage.getItem('token'))
    this.hedears = new HttpHeaders ({
      "Authorization" : `Bearer ${localStorage.getItem('token')}`,
    })
  }


  getProducts() : Observable<Response<Products>> {
    this.hedears = new HttpHeaders ({
      "Authorization" : `Bearer ${localStorage.getItem('token')}`,
    })
    return this.http.get<Response<Products>>(`${this.api_base_url}/products`,{headers : this.hedears})
  }

  addProduct(data : Products) : Observable<Response<Products>>{
    const formdata = new FormData()
    formdata.append("data" , JSON.stringify({"name" : data.name , "price" : data.price}))

    return this.http.post<Response<Products>>(`${this.api_base_url}/products`,formdata, {headers : this.hedears})
  }

  getProductById (id:number) : Observable<Response<Products>> {
    return this.http.get<Response<Products>>(`${this.api_base_url}/products/${id}`,{headers : this.hedears})
  }

  updateProduct(id  : number, data: Products) : Observable<Response<Products>> {
    const formdata = new FormData()
    formdata.append("data" , JSON.stringify({"name" : data.name , "price" : data.price}))
    return this.http.put<Response<Products>>(`${this.api_base_url}/products/${id}`,formdata,{headers : this.hedears})
  }

  deleteProduct (id:number) : Observable<Response<Products>> {
      return this.http.delete<Response<Products>>(`${this.api_base_url}/products/${id}`,{headers : this.hedears})
  }
}
