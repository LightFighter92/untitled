import {RouterModule, Routes} from "@angular/router";
import {AbhollisteComponent} from "./components/abholListe/abholListe.component";
import {SponsorListeComponent} from "./components/sponsorListe/sponsorenListe.component";
import {ReportComponent} from "./components/report/report.component";
import {DokumenteComponent} from "./components/dokumente/dokumente.component";
import {BudgetComponent} from "./components/budget/budget.component";
import {InventarComponent} from "./components/inventar/inventar.component";
import {MyHomeComponent} from "./components/my-home/my-home.component";
import {RegisterComponent} from "./components/register/register.component";
import {TaskComponent} from "./components/task/task.component";
import * as firebase from "firebase";

const APP_ROUTES: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path: 'logout', redirectTo: '/home'},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: MyHomeComponent}];


/*
 * Wenn der User eingeloggt ist folgende Seiten ergänzen
 * */
if (firebase.auth().currentUser !== null) {
  APP_ROUTES.push({path: 'abholen', component: AbhollisteComponent},
    {path: 'sponsorliste', component: SponsorListeComponent},
    {path: 'report', component: ReportComponent},
    {path: 'docs', component: DokumenteComponent},
    {path: 'budget', component: BudgetComponent},
    {path: 'inventar', component: InventarComponent},
    {path: 'tasks', component: TaskComponent});
}


export const  routing = RouterModule.forRoot(APP_ROUTES);
