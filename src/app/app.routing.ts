import {Routes, RouterModule} from "@angular/router";
import {AbhollisteComponent} from "./components/abholListe/abholListe.component";
import {SponsorListeComponent} from "./components/sponsorListe/sponsorenListe.component";
import {ReportComponent} from "./components/report/report.component";
import {DokumenteComponent} from "./components/dokumente/dokumente.component";
import {BudgetComponent} from  "./components/budget/budget.component";
import {InventarComponent} from "./components/inventar/inventar.component";
import {MyHomeComponent} from "./components/my-home/my-home.component";

const APP_ROUTES: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:MyHomeComponent},
  {path:'abholen',component:AbhollisteComponent},
  {path:'sponsorliste',component:SponsorListeComponent},
  {path:'report',component:ReportComponent},
  {path:'docs',component:DokumenteComponent},
  {path:'budget',component:BudgetComponent},
  {path:'inventar',component:InventarComponent},
  {path:'logout',redirectTo:'/home'}
];


export const  routing = RouterModule.forRoot(APP_ROUTES);
