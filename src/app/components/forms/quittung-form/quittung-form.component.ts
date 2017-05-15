import {Component} from "@angular/core";
import * as firebase from "firebase";


@Component({
  selector: 'app-quittung-form',
  templateUrl: 'quittung-form.component.html',
  styles: []
})


export class QuittungFormComponent {

  storage = firebase.storage();
  storageRef = this.storage.ref();

}
