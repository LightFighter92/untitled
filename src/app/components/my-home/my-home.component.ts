import { Component,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import {Auth} from "../../services/auth.service";
import {DialogService} from "ng2-bootstrap-modal";
import {InfoModelComponent} from "../modals/info-modal/info-model.component";

@Component({
  selector: 'app-my-home',
  templateUrl: 'my-home.component.html',
  styles: [`
  button{font-size: 1.8em;}
  #content {padding: 30px;background-color: #eeeeee;}
`
  ],
  animations:[
    trigger('focusPanel',[
      state('inactive',style({transform:'scale(1)'})),
      state('active',style({transform:'scale(1.1)'})),
      transition('inactive => active',animate('100ms ease-in')),
      transition('active => inactive',animate('100ms ease-out'))
    ])
  ]

})
export class MyHomeComponent {

  constructor(private auth:Auth,private dialogService:DialogService) {}

  state:string = "inactive";

  toggleMove(){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  showConfirm() {
    let disposable = this.dialogService.addDialog(InfoModelComponent, {
      title:'Confirm title',
      message:'Confirm message'})
      .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close dialog calling disposable.unsubscribe();
    //If dialog was not closed manually close it by timeout
    setTimeout(()=>{
      disposable.unsubscribe();
    },10000);
  }




}
