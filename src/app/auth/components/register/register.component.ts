import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm !: FormGroup
  // newCredentials$ !: Observable<{login:string,email:string,password:string}>
  user$  !: Observable<User>

  constructor(private fb: FormBuilder,private as : AuthService,private user: User) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username : [null,[Validators.required,Validators.minLength(3)]],
      email: [null,[Validators.required,Validators.pattern(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/)]],
      first_name: [null,[Validators.required,Validators.minLength(4)]],
      last_name: [null,Validators.minLength(2)],
      password: [null,[Validators.required,Validators.minLength(8)]],
      confirm_password: [null,]
    })
    // this.registerForm = this.fb.group({
      // username :
      //   [null,Validators.required,Validators.minLength(4)]
      // ,
      // email : new FormControl(
      //   null,
      //   [Validators.required]
      // ),
      // first_name : new FormControl(
      //   null,
      //   [Validators.required]
      // ),
      // last_name : new FormControl(
      //   null,
      //   [Validators.required]
      // ),

      // password : new FormControl(
      //   null,
      //   [Validators.required]
      // ),
      // confirm_password :  [null]
        // birth :  [null],
      // profil_img :  [null],
      // role :  [null],
    // })
    this.user$ = this.registerForm.valueChanges.pipe(
      map(values => ({
        ... values,
      }),

    ))
  }
  get username()  { return this.registerForm.controls['username']; }

  onSubmitRegisterForm () : void {
    console.log(this.registerForm.value)
    // if (this.registerForm.valid) {
    //   this.as.register(this.registerForm.value).subscribe(
    //     result => {
    //       console.log(result);
    //     }
    //   )
    // }
    // else if (this.registerForm.invalid){

    //   this.username

    // }

  }


}
