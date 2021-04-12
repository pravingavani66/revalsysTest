import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserToken } from '../models/user-token.interface';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit  {

  constructor(private auth: AuthService, private router: Router) {}

  loggedInUser: IUserToken;

  ngOnInit(): void {}
  ngAfterViewChecked(): void {
    this.loggedInUser = this.auth.getLoggedInUser();
  }

  logUserOut() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
