import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authError: any;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.eventAuthError$.subscribe( data => this.authError = data );
  }

  login(data) {
    this.auth.login(data.value.email, data.value.password);
  }

}
