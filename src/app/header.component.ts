import { Component, OnInit } from '@angular/core';
import {Auth} from "./services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor(private auth: Auth) { }

  ngOnInit() {
  }

}