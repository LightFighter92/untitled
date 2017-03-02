import {Component, Injectable} from '@angular/core';
import {BudgetItem} from "../../../models/budget.model";
import {Validators, FormBuilder} from "@angular/forms";
import {BudgetService} from "../../../services/budget.service";
import {FirebaseListObservable, AngularFire} from "angularfire2";

@Component({
  selector: 'app-budget-form',
  templateUrl: 'budget-form.component.html',
  styles: []
})

@Injectable()

export class BudgetFormComponent {

  public budgetItem:BudgetItem;
  private tempBudgetItem;


  public budgetForm = this.fb.group({
    zweck: ["", Validators.required],
    betrag: ["", Validators.required],
    ausgabe:["",Validators.required],
  });

  constructor(public fb: FormBuilder,public budgetService:BudgetService) {}

  //Hol sich die Formulardaten, erstellt damit ein neues Budgetobjekt und sendet die Daten an den Budgetserive, welcher das Objekt der Datenbank hinzufügt
  sendToBudget(event) {
    console.log(event);

    this.tempBudgetItem= this.budgetForm.value;
    this.budgetItem = new BudgetItem(this.tempBudgetItem.zweck,this.tempBudgetItem.betrag,this.tempBudgetItem.ausgabe);

    this.budgetService.addToBuget(this.budgetItem);

  }


}
