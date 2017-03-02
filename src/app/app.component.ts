import { Component } from '@angular/core';
import {Auth} from "./services/auth.service";
import {database,initializeApp} from 'firebase';
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {HeaderComponent} from "./header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private auth:Auth,private af:AngularFire){

  }
}
