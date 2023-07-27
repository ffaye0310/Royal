import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain_name !: string
  constructor(private http : HttpClient) {
    this.domain_name = "http://localhost:1337/api/auth/local"
  }

  login(identifier:string,password:string): Observable<any> {
    return this.http.post<any>(`${this.domain_name}`,{"identifier":identifier,"password":password})
  }

  getToken(): any  {
    if (localStorage.getItem("token")) {
      return localStorage.getItem("token")
    }else{
      return null ;
    }
  }

  // register =  (identifier:string,email:string,password:string) => {
  //   return this.http.post(`${this.domain_name}/register`,{"username":identifier,"email":email,"password":password})
  // }
  register =  (user:User) => {
    return this.http.post(`${this.domain_name}/register`,user)
  }

  

}
