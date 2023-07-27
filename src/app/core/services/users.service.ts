import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  api_base_url !: string
  hedears !: HttpHeaders
  token !:string


  constructor(private http : HttpClient) {
    this.api_base_url = "http://localhost:1337/api"
    // this.token = JSON.stringify(localStorage.getItem('token'))
    // console.log()
  }


  getUsers() : Observable<User[]> {
    this.hedears = new HttpHeaders ({
      "Authorization" : "Bearer",
    })
    return this.http.get<User[]>(`${this.api_base_url}/users`,{headers : this.hedears})
  }

  getUsersById (id:number) : Observable<User> {
    return this.http.get<User>(`${this.api_base_url}/user/${id}`)
  }
}
