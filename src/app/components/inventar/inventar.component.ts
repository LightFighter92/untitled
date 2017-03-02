import { Component, OnInit } from '@angular/core';
import {InventarService} from "../../services/inventar.service";
import {Artikel} from "../../models/artikel.model";
import {SponsorService} from "../../services/sponsorListe.service";
import {Sponsor} from "../../models/sponsor.model";
import {FirebaseListObservable} from "angularfire2";


@Component({
  selector: 'app-inventar',
  templateUrl: 'inventar.component.html',
  styles: []
})
export class InventarComponent implements OnInit {
  public inventar:FirebaseListObservable<any>;
  public sponsoren: FirebaseListObservable<any>;
  public editItem = {};
  public itemSelected:boolean = false;
  private gesamtWert;

  constructor(private inventarService:InventarService,private sponsorService:SponsorService) { }

  //entfernt einen Bestimmten Artikel aus dem Inventar
  onRemoveFromInventar(key){
    this.inventarService.removeFromInventar(key);
  }

  onUpdate(item){
    this.inventarService.updateArtikel(item);
  }

  //Wählt den Artikel aus, welcher bearbeitet werden soll
  setItem(item){
    this.editItem = item;
    this.itemSelected = true;
  }

  //Das Zurücksetzen des Formlars ermöglicht es
  resetItem(){
    this.itemSelected=false;
  }

  onSort(sortBy:string){
    this.inventar = this.inventarService.sortInventar(sortBy);
  }

  //Ruft die Liste der Sponsoren und die Liste der Artikel im Inventar von der Datenbank ab
  ngOnInit() {
    this.inventar = this.inventarService.getInventar();
    this.sponsoren = this.sponsorService.getSponsorListe();
    this.gesamtWert = this.inventarService.calcGesamtwertArtikel();
  }

}
