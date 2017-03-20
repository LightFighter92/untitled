import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import * as firebase from "firebase";

@Component({
  selector: 'app-my-home',
  templateUrl: 'my-home.component.html',
  styles: [],
  animations: []
})

export class MyHomeComponent {

  user: FirebaseListObservable<any>;
  abholen: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {


    if (firebase.auth().currentUser !== null) {
      this.user = af.database.list("/Users", {
        query: {
          orderByChild: "email",
          equalTo: firebase.auth().currentUser.email
        }
      });
    }

  }

  ngOnInit() {

  }
}
