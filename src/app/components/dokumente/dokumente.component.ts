import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-dokumente',
  templateUrl: 'dokumente.component.html',
  styles: []
})
export class DokumenteComponent implements OnInit {

  //Liste der vorhanden Dokumente
  docs=[
    {name: "Ideen,ToDo und Notizen", src: "ToDo.docx", type: "Word"},
    {name: "Migration", src: "Migration der Tombolasoftware.docx", type: "Word"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
