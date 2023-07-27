import { UsersService } from 'src/app/core/services/users.service';
import { User } from './../../../core/models/user.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users$ !: Observable<User[]>

  constructor(private us : UsersService) {}

  ngOnInit(): void {

      this.users$ = this.us.getUsers()

  }

}
