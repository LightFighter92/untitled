import { Component, OnInit } from '@angular/core';
import {BudgetService} from '../../services/budget.service';
import {BudgetItem} from "../../models/budget.model";
import {FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-budget',
  templateUrl: 'budget.component.html',
  styles: ['']
})
export class BudgetComponent implements OnInit {

  budget:FirebaseListObservable<any>;
  public prozentBudget:number = 0;
  public einnahmen:number = 0;
  public ausgaben:number = 0;
  public editItem = {};
  public itemSelected:boolean = false;

  constructor(private budgetService:BudgetService) { }

  setItem(item){
    this.editItem = item;
    this.itemSelected = true;
  }

  resetItem(){
    this.itemSelected = false;
  }

  onUpdate(item){
    this.budgetService.updateBudgetItem(item);
  }

  //Ruft einen Service auf, welcher das Objekt, welches als Parameter übertragen wurde, aus der Budgetliste entfernt
  onRemoveItem(key){
    this.budgetService.removeFromInventar(key);
  }

  //Holt sich alle Objekte aus der Budgetdatenbank und berechnet die Einnahmen, Ausgaben, den Gewinn sowie die Erschöpfung des Budgets in Prozent
  ngOnInit() {
    this.budget = this.budgetService.getItems();
    this.einnahmen = this.budgetService.einnahmen;
    this.ausgaben = this.budgetService.ausgaben;
    this.prozentBudget = this.ausgaben / 25;
  }

}
