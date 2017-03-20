import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private af: AngularFire) {
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }

  ngOnInit() {
  }

}
