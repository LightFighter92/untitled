import { Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Sponsor} from "../../../models/sponsor.model";
import {SponsorService} from "../../../services/sponsorListe.service";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-sponsor-form',
  templateUrl: 'sponsor-form.component.html',
  styles: []
})

export class SponsorFormComponent {
  //Definition Variabeln
  public sponsor:Sponsor;
  private tempSponsor;
  public sponsoren: FirebaseListObservable<any>;

  //Definition Formular
  public sponsorForm = this.fb.group({
    name: ["", Validators.required],
    strasse: ["", Validators.required],
    plz:["",Validators.required],
    ort:["",Validators.required],
    regio:["",Validators.required],
    status:["",Validators.required],
    verantwortlich:["",Validators.required],
    bemerkungen:["",Validators.required]
  });


  constructor(public fb: FormBuilder,public sponsorService:SponsorService) {
    this.sponsoren = this.sponsorService.getSponsorListe();
  }

  //Holt sich die Formulardaten und erstellt ein Objekt. Dieses Objekt wird an einen Service gesendet, der das Objekt in eine Datenbank sendet
  sendToSponsorListe(event) {
    console.log(event);
    console.log(this.sponsorForm.value.name);

    this.tempSponsor= this.sponsorForm.value;
    this.sponsor = new Sponsor(this.tempSponsor.name,this.tempSponsor.strasse,this.tempSponsor.plz,this.tempSponsor.ort,
      this.tempSponsor.regio,this.tempSponsor.status,this.tempSponsor.verantwortlich,this.tempSponsor.bemerkungen);

    this.sponsorService.addToSponsorListe(this.sponsor);

  }

}
