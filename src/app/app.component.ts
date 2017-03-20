import {Component} from "@angular/core";
import {database, initializeApp} from "firebase";
import {AngularFire} from "angularfire2";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private af: AngularFire) {

  }
}
