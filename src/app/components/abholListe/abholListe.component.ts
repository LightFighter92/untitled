import { Component, OnInit } from '@angular/core';
import {SponsorService} from "../../services/sponsorListe.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-collection',
  templateUrl: 'abholListe.component.html',
  styles:[]
})
export class AbhollisteComponent implements OnInit {
  abholListe: FirebaseListObservable<any>;
  private editItem = {};
  private itemSelected:boolean = false;

  setItem(item){
    this.editItem = item;
    this.itemSelected = true;
  }

  resetItem(){
    this.itemSelected = false;
  }

  onSort(sortItem:string){
    this.abholListe = this.sponsorService.sortAbholListe(sortItem);
  }

  onUpdate(item){
    this.sponsorService.updateAbholliste(item);
  }

  //Ruft einen Service aus, welcher einen key als Parameter nimmt und das Objekt mit dem jeweiligen key aus der Abholliste entfernt
  onRemoveFromAbholliste(key:string){
    this.sponsorService.removeFromAbholliste(key);
  }

  constructor(private  sponsorService: SponsorService) { }

  ngOnInit() {
    this.abholListe = this.sponsorService.getAbholliste();
  }

}
