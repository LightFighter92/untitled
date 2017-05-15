import {Component} from "@angular/core";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import * as firebase from "firebase";
import {SponsorService} from "../../services/sponsorListe.service";

@Component({
  selector: 'app-my-home',
  templateUrl: 'my-home.component.html',
  styles: [],
  animations: []
})

export class MyHomeComponent {

  user: FirebaseListObservable<any>;
  abholen: FirebaseListObservable<any>;
  tasks: FirebaseListObservable<any>;

  constructor(private af: AngularFire, sponsorenservice: SponsorService) {

    //Abrufen des aktuellen Benutzers aus der Datenbank
    if (firebase.auth().currentUser !== null) {
      this.user = af.database.list("/Users", {
        query: {
          orderByChild: "email",
          equalTo: firebase.auth().currentUser.email
        }
      });

      //Aufgabenliste und Abholliste des aktuellen Benutzers abholen
      this.abholen = sponsorenservice.getAbhollisteOfCurrentUser(firebase.auth().currentUser.email);
      this.tasks = sponsorenservice.getTaskOfCurrentUser(firebase.auth().currentUser.email);


    }

  }

  ngOnInit() {

  }
}
