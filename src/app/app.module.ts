//Liberies
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule, FormBuilder} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AngularFireModule} from "angularfire2";
import {BootstrapModalModule} from "ng2-bootstrap-modal";
import {O2UploadToFbsComponent} from "o2-upload-to-fbs";
//Services
import {routing} from "./app.routing";
import {SponsorService} from "./services/sponsorListe.service";
import {InventarService} from "./services/inventar.service";
import {BudgetService} from "./services/budget.service";
import {UserService} from "./services/firebase.service";
//Components
import {AppComponent} from "./app.component";
import {SponsorListeComponent} from "./components/sponsorListe/sponsorenListe.component";
import {AbhollisteComponent} from "./components/abholListe/abholListe.component";
import {HeaderComponent} from "./header.component";
import {ReportComponent} from "./components/report/report.component";
import {BudgetComponent} from "./components/budget/budget.component";
import {DokumenteComponent} from "./components/dokumente/dokumente.component";
import {InventarComponent} from "./components/inventar/inventar.component";
import {MyHomeComponent} from "./components/my-home/my-home.component";
import {SponsorFormComponent} from "./components/forms/sponsor-form/sponsor-form.component";
import {InventarFormComponent} from "./components/forms/inventar-form/inventar-form.component";
import {BudgetFormComponent} from "./components/forms/budget-form/budget-form.component";
import {firebaseConfig, myFirebaseAuthConfig} from "../environments/firebase.config";
import {InfoModelComponent} from "./components/modals/info-modal/info-model.component";
import {QuittungFormComponent} from "./components/forms/quittung-form/quittung-form.component";
import {RegisterComponent} from "./components/register/register.component";
import {FilterPipe} from "./pipes/filter.pipe";
import {LoginComponent} from "./components/login/login.component";
import {TaskComponent} from "./components/task/task.component";


@NgModule({
  declarations: [
    AppComponent,
    SponsorListeComponent,
    AbhollisteComponent,
    HeaderComponent,
    ReportComponent,
    BudgetComponent,
    DokumenteComponent,
    InventarComponent,
    MyHomeComponent,
    SponsorFormComponent,
    InventarFormComponent,
    BudgetFormComponent,
    InfoModelComponent,
    QuittungFormComponent,
    RegisterComponent,
    FilterPipe,
    O2UploadToFbsComponent,
    LoginComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    BootstrapModalModule

  ],
  providers: [SponsorService, BudgetService, InventarService, FormBuilder, UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
