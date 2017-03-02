import {Component, OnInit} from '@angular/core';
import {Artikel} from "../../../models/artikel.model";
import {Validators, FormBuilder} from "@angular/forms";
import {InventarService} from "../../../services/inventar.service";
import {SponsorService} from "../../../services/sponsorListe.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-inventar-form',
  templateUrl: 'inventar-form.component.html'
})
export class InventarFormComponent implements OnInit{

  //Definitionen Variabeln
  private artikel:Artikel;
  private tempArtikel;
  public sponsoren: FirebaseListObservable<any>;

  //Definition Formular
  public inventarForm = this.fb.group({
    artikel: ["", Validators.required],
    wert: ["", Validators.required],
    anzahl:["",Validators.required],
    sponsor:["",Validators.required]
  });

  constructor(private fb: FormBuilder,private inventarService:InventarService, private sponsorenService:SponsorService) {}

  //Holt sich die Formulardaten, erstellt damit ein Objekt und sendet dieses an den Service, welcher das Objekt an die Datenbank sendet
  sendToInventar(event) {
    console.log(event);
    console.log(this.inventarForm.value.name);

    this.tempArtikel= this.inventarForm.value;
    this.artikel = new Artikel(this.tempArtikel.artikel,this.tempArtikel.wert,this.tempArtikel.anzahl, this.tempArtikel.sponsor);

    this.inventarService.addToInventar(this.artikel);

  }

  ngOnInit() {
    this.sponsoren = this.sponsorenService.getSponsorListe();
  }
}
