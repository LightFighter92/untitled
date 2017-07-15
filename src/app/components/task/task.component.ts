import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFire, FirebaseListObservable} from "angularfire2";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styles: []
})
export class TaskComponent implements OnInit {

  taskList: FirebaseListObservable<any>;

  taskForm = this.fb.group({
    taskName: ["", Validators.required],
    taskUser: ["", Validators.required],
  });

  constructor(private fb: FormBuilder, private af: AngularFire) {
    this.taskList = af.database.list("/Task")
  }

  submitTask() {
    this.taskList.push({taskName: this.taskForm.value.taskName, taskUser: this.taskForm.value.taskUser});
  }

  ngOnInit() {
  }

}
