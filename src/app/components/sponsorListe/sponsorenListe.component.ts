import {Component, OnInit, ViewChild, Pipe} from '@angular/core';
import {SponsorService} from "../../services/sponsorListe.service";
import {Sponsor} from "../../models/sponsor.model";
import {FirebaseListObservable, AngularFire} from "angularfire2";
import{FilterPipe} from "../../pipes/filter.pipe";

@Component({
  selector: 'app-market',
  templateUrl: 'sponsorenListe.component.html',
})


export class SponsorListeComponent implements OnInit {

  //Definition Variablen
  private sponsoren:FirebaseListObservable<any>;
  public editItem = {};
  public itemSelected:boolean = false;
  private anzahlSponsoren;


  //Ruft einen Service auf, der einen Sponsor der Abholliste befügt
  onAddToSponsorenListe(item: Sponsor){
   this.sponsorService.addToAbholListe(item);
  }

//Ruft einen Service auf, welcher ein bestehendes Item mit der Datenbank synchronisiert
  onUpdateSponsor(item){
    this.sponsorService.updateSponsorListe(item);
  }

  onSort(sortItem:string){
    this.sponsoren = this.sponsorService.sortSponsorListe(sortItem);
  }



  //Nimmt den einzigartigen Key eines Sponsors als Parameter und gibt ihn an einen Service weiter, welcher den Sponsor aus der Datenbank löscht
  onRemoveFromSponsorListe(key:string){
    this.sponsorService.removeFromSponsorListe(key);
  }

  //ToDo: Funktion um die Bemerkungen für einen Sponsor als Popup oder Modal anzuzeigen
  showSponsorInfo(info){
  }

  //Füllt die Daten eines ausgewählten Sponsors in das Formular und ermöglicht das bearbeiten dieses Sponsors
  setItem(item){
    this.editItem = item;
    this.itemSelected = true;
  }

  //Setzt das Formular zurück und ermöglicht das Neuerfassen von Sponsoren
  resetItem(){
    this.itemSelected=false;
  }

  constructor(private sponsorService: SponsorService,private af:AngularFire)  {
    this.sponsoren = this.sponsorService.getSponsorListe();
    this.anzahlSponsoren = this.sponsorService.getAnzahlSponsoren();
  }

  ngOnInit() {

  }

}
