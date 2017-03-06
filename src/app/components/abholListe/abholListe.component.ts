import {Component, OnInit} from "@angular/core";
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

  /*
   Nimmt einen ausgewählten Datensatz und setzt die Attribute in das Formular
   @item: ausgewählter Datensatz aus der Tabelle
   */
  setItem(item){
    this.editItem = item;
    this.itemSelected = true;
  }

  //Setzt das Forumlar zurück
  resetItem(){
    this.itemSelected = false;
  }

  /*
   Ruft einen Service auf, welcher die Datensätze nach einem bestimmten Attributt sortiert
   @sortItem: Attributt, nach dem sortiert werden soll.
   */
  onSort(sortItem:string){
    this.abholListe = this.sponsorService.sortAbholListe(sortItem);
  }

  /*
   Ruft einen Service auf, welcher ein bestimmtes Item aktualisiert
   @item: Item, welches aktualisiert werden soll
   */
  onUpdate(item){
    this.sponsorService.updateAbholliste(item);
  }

  /*
   Ruft einen Service aus, welcher einen key als Parameter nimmt und das Objekt mit dem jeweiligen key aus der Abholliste entfernt
   @key: ID eines Items, welches gelöscht werden soll
   */
  onRemoveFromAbholliste(key:string){
    this.sponsorService.removeFromAbholliste(key);
  }

  constructor(private  sponsorService: SponsorService) { }

  ngOnInit() {
    this.abholListe = this.sponsorService.getAbholliste();
  }

}
