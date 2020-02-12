import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']

})
export class NavComponent implements OnInit {
  showMenu = true;
  mobileView = false;
  user: firebase.User;
  public innerWidth: number = window.innerWidth;
  lines: number[] = new Array(3);

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    if (this.innerWidth > 600) {
      this.mobileView = false;
      this.showMenu = true;
    } else {
      this.mobileView = true;
      this.showMenu = false;
    }

    this.auth.getUserState()
    .subscribe( user => {
      this.user = user;
    });
  }

  onResize(event) {
    if (event.target.innerWidth > 600) {
      this.mobileView = false;
      this.showMenu = true;
    } else {
      this.mobileView = true;
      this.showMenu = false;
    }
  }

  logout() {
    this.auth.logout();
  }

  menuToggle() {
    this.showMenu = !this.showMenu;
  }

}
