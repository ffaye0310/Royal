import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm!:FormGroup
  newCredentials$!: Observable<{login:string,password:string}>

  constructor(private fb: FormBuilder,private auth: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login : [null,Validators.required,],
      password : [null,Validators.required,]
    })

    this.newCredentials$ = this.loginForm.valueChanges.pipe(
      map(values => ({
         ...values
      }))
    );
  }


  onSubmitForm() : void {
    this.auth.login(this.loginForm.value.login,this.loginForm.value.password).subscribe(
      (result) => {
        // console.log(result);
        if (result.jwt) {
          localStorage.setItem("token", result.jwt)
          this.router.navigateByUrl("/dashboard")
      } else {
          this.router.navigateByUrl("/auth/login")
      }
    }
  )



  }


  // login!:string
  // password!:string



}
