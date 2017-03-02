import { Component} from '@angular/core';
import {DialogComponent, DialogService} from "ng2-bootstrap-modal";

@Component({
  selector: 'app-info-model',
  templateUrl: 'info-model.component.html',
  styles: []
})

export class InfoModelComponent extends DialogComponent {

  constructor(dialogService: DialogService) {
    super(dialogService);
  }

  confirm() {
    // we set dialog result as true on click on confirm button,
    // then we can get dialog result from caller code
    this.result = true;
    this.close();
  }


}