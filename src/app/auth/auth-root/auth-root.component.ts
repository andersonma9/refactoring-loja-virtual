import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-root',
  templateUrl: './auth-root.component.html',
  styleUrls: ['./auth-root.component.scss']
})
export class AuthRootComponent implements OnInit {

  sideMode: string = "over";

  opened: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSideNav(ev) {
    this.opened = !this.opened;
  }

  changed(ev) {
    this.opened = ev;
  }


}
