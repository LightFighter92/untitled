/**
 * Created by dch61 on 10.02.2017.
 */
import {BudgetItem} from "../models/budget.model";
import {Injectable} from "@angular/core";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Injectable()
export class BudgetService{

  public ausgaben:number;
  public einnahmen:number;

  private budget:FirebaseListObservable<any>;
  private budgetItemToUpdate;

  constructor(private af:AngularFire){
    this.budget = af.database.list('/Budget');
    this.ausgaben = this.getAusgaben();
    this.einnahmen = this.getEinnahmen();
  }

  /*
   Nimmt ein BugetItem als Parameter und fügt dieses der Datenbank als neuen Datensatz bei
   @item: Objekt, dass der Datenbank hinzugefügt werden soll
   */
  addToBuget(item:BudgetItem){
    this.budget.push({zweck:item.zweck,betrag:item.betrag,ausgabe:item.ausgabe});
  }

  /*
   Nimmt den Key eines Objekts und löscht das jewelige Objekt aus der Datenbank
   @key: ID des zu löschenden Objekts
   */
  removeFromInventar(key:string){
    this.budget.remove(key);
  }

  /*
   Synchronisiert ein bestehendes Objekt mit der Datenbank
   @item: Datensatz der aktualsiert werden soll
   */
  updateBudgetItem(item){
    this.budgetItemToUpdate = this.af.database.object("Budget/" + item.$key);
    this.budgetItemToUpdate.update({zweck:item.zweck,betrag:item.betrag,ausgabe:item.ausgabe});
  }

  //berechnet die totalen Einnahmen. Als Anfangswert wird 2500(Budget) gesetzt.
  getEinnahmen(){

    this.einnahmen = 0;

   this.af.database.list("/Budget",{query:{
     orderByChild:'ausgabe',
     equalTo:'Einnahme'
   }}).map(items => items.reduce((acc, item) => acc + item.betrag, 0))
   // Log the total
     .subscribe(total => {console.log(total);this.einnahmen = total;});

   return this.einnahmen+2500;

  }

  //berechnet die totalen Ausgaben. Als Anfangswert wird 0 gesetzt.
  getAusgaben(){

    this.ausgaben = 0;

    this.af.database.list("/Budget",{query:{
      orderByChild:'ausgabe',
      equalTo:'Ausgabe'
    }}).map(items => items.reduce((acc, item) => acc + item.betrag, 0))
    // Log the total
      .subscribe(total => {console.log(total);this.ausgaben = total;});

    return this.ausgaben;
  }

  //Gibt die Datensätze des Budgets zurück
  getItems(){
    return this.budget;
  }

}
