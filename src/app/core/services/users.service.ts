import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Response } from '../interfaces/response';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api_base_url !: string
  hedears !: HttpHeaders
  token !:string


  constructor(private http : HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    this.token = JSON.stringify(localStorage.getItem('token'))
    this.hedears = new HttpHeaders ({
      "Authorization" : `Bearer ${JSON.parse(this.token)}`,
    })
  }


  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(`${this.api_base_url}/users`,{headers : this.hedears})
  }

  getUsersById (id:number) : Observable<User> {
    return this.http.get<User>(`${this.api_base_url}/users/${id}?populate=role`,{headers : this.hedears})
  }

  getRules = () => {
    return this.http.get(`${this.api_base_url}/users-permissions/roles`,{headers : this.hedears})
  }
  
  addUser(data : FormData) : Observable<Response<User>> {
    return this.http.post<Response<User>>(`${this.api_base_url}/users`,data, {headers : this.hedears})
  }    


  updateUser(id : number,data : FormData) : Observable<Response<User>> {
    return this.http.put<Response<User>>(`${this.api_base_url}/users/${id}`,data, {headers : this.hedears})
  }   

  deleteUser(id : number) : Observable<Response<User>> {
    return this.http.delete<Response<User>>(`${this.api_base_url}/users/${id}`,{headers : this.hedears})
  }
}
