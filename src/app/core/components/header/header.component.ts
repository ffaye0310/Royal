import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title !: string ;
  constructor(private router : Router ,private auth: AuthService) {
  }

  ngOnInit(): void {}

  onLogout () {
    if (localStorage.getItem("token")) {
      localStorage.clear()
      this.router.navigateByUrl("auth/login")
      return true

    } else {
      return false
    }
  }


}
