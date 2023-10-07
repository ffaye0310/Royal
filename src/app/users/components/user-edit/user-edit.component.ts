import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, first, map, tap } from 'rxjs';
import { Entry } from 'src/app/core/interfaces/entry';
import { Response } from 'src/app/core/interfaces/response';
import { Rules } from 'src/app/core/models/rules.model';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from 'src/app/core/services/users.service';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  userForm !:  FormGroup
  result$ !: Observable<any>
  rules  !: Rules[]
  user$ !: Observable<User> 
  userToEdit !: User
  message !: string
  disabled : boolean = false;

  constructor(private us : UsersService , private fb : FormBuilder, private route : Router  ) { }

  ngOnInit() {
    this.rules  = []
    this.result$ = this.us.getRules().pipe(
        tap (x => x)
    )
    
    this.user$ = this.us.getUsersById(parseInt(location.href.split("/")[5])).pipe()
    this.user$.subscribe(
      x => { console.log(x)
        this.userForm.setValue({
          "first_name"  : x.first_name,
          "last_name"  : x.last_name,
          "username"  : x.username,
          "email"  : x.email,
          "password"  : "",
          "phone"  : x.phone,
          "role" : x.role.id,
      })
      // if
      }
    )

    this.result$.subscribe(x => { 
      for (let index = 0; index < x.roles.length; index++) {
              this.rules.push({ id : x.roles[index].id , name : x.roles[index].name});
        }
      })

      this.userForm = this.fb.group({
        first_name  : [null, Validators.required],
        last_name  : [null , Validators.required],
        username  : [null , Validators.required],
        email  : [null , Validators.required],
        password  : [null , Validators.required],
        phone  : [null , Validators.required],
        role : [null, Validators.required],
      })

      
  }

  onSubmitUserForm = () => {
        const formdata =  new FormData()
        formdata.append("first_name" , this.userForm.value.first_name)
        formdata.append("last_name", this.userForm.value.last_name)
        formdata.append("username", this.userForm.value.username)
        formdata.append("email" , this.userForm.value.email)
        formdata.append("phone" , this.userForm.value.phone)
        formdata.append("role" , this.userForm.value.role)

        
        this.us.updateUser(parseInt(location.href.split("/")[5]),formdata).subscribe(
          result => {
            if (result) {
              this.message = "success";
              setTimeout(() => {
                this.route.navigateByUrl("/users")
              }, 3000);
            }
            else{
              this.message = "error"
            }
          },
         
        )
       
  }


}
