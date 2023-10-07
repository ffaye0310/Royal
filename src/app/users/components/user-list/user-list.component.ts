import { UsersService } from 'src/app/core/services/users.service';
import { User } from './../../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$ !: Observable<User[]>
  message !: string

  constructor(private us : UsersService, private router : Router) {}

  ngOnInit(): void {

    this.users$ = this.us.getUsers()

  }

  onEdit = (id : number) => {
    this.router.navigateByUrl(`users/edit/${id}`)
  }

  onDelete = (id : number) => {
     this.us.deleteUser(id).subscribe(
      result  => {
          if(result){
            this.message = "success"
            setTimeout(() => {
              location.reload()
            }, 3000);
          }
          else{
            this.message = "error"
          }
      }
      
    )
  }

}
