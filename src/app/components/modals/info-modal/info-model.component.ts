import {Component} from "@angular/core";
import {FirebaseListObservable} from "angularfire2";
import {SponsorService} from "../../../services/sponsorListe.service";

@Component({
  selector: 'app-info-model',
  templateUrl: 'info-model.component.html',
  styles: []
})

export class InfoModelComponent {

  private sponsoren: FirebaseListObservable<any>;

  constructor(private sponsorenService: SponsorService) {
  }


  ngOnInit() {
    this.sponsoren = this.sponsorenService.getSponsorListe();
  }


}
