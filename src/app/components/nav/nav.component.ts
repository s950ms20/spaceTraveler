import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']

})
export class NavComponent implements OnInit {
  showMenu = true;
  mobileView = false;

  public innerWidth: number = window.innerWidth;

  lines: number[] = new Array(3);

  constructor() { }

  ngOnInit() {
    if (this.innerWidth > 600) {
      this.mobileView = false;
      this.showMenu = true;
    } else {
      this.mobileView = true;
      this.showMenu = false;
    }
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


  menuToggle() {
    this.showMenu = !this.showMenu;
  }

}
