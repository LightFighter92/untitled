import {Component, OnInit} from "@angular/core";
import {AngularFire} from "angularfire2";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  public userForm = this.fb.group({
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required]
  });


  constructor(public fb: FormBuilder, private af: AngularFire) {
  }

  ngOnInit() {
  }

  submitUser() {
    let users = this.af.database.list('/Users');
    users.push({
      username: this.userForm.value.username,
      email: this.userForm.value.email
    });

    this.af.auth.createUser({email: this.userForm.value.email, password: this.userForm.value.password});

  }
}
