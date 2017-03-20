import {Component, OnInit} from "@angular/core";
import {BudgetService} from "../../services/budget.service";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.component.html',
  styles: ['']
})
export class BudgetComponent implements OnInit {

  budget: FirebaseListObservable<any>; // Speichert die Datensätze aus der Firebasedatenbank
  public prozentBudget: number = 0;// Definiert, wie viel des gegebenen Budget bereits ausgegeben wurden (in Prozent)
  public einnahmen:number = 0;
  public ausgaben:number = 0;
  public editItem = {};
  public itemSelected:boolean = false;

  constructor(private budgetService:BudgetService) { }

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
   Ruft einen Service auf welcher, ein bestimmtes Item aktualsiert
   @item: Datensatz, welcher aktualsiert werden soll
   */
  onUpdate(item){
    this.budgetService.updateBudgetItem(item);
  }

  /*
   Ruft einen Service auf, welcher ein Objekt aus der Budgetliste entfernt
   @key: ID eines Items, welches gelöscht werden soll
   */
  onRemoveItem(key){
    this.budgetService.removeFromInventar(key);
  }

  //Holt sich alle Objekte aus der Budgetdatenbank und berechnet die Einnahmen, Ausgaben, den Gewinn sowie die Erschöpfung des Budgets in Prozent
  ngOnInit() {
    this.budget = this.budgetService.getItems();
    this.einnahmen = this.budgetService.einnahmen;
    this.ausgaben = this.budgetService.ausgaben;
    this.prozentBudget = this.ausgaben / (2500 + this.einnahmen / 100);
  }

}
