import { Component, OnInit } from '@angular/core';
import {Auth} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}
