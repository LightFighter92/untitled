import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AngularFire} from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  public loginForm = this.fb.group({
    userEmail: ["", Validators.required],
    userPassword: ["", Validators.required],
  });


  constructor(af:AngularFire,private fb:FormBuilder) {
  }

  login(){
    firebase.auth().signInWithEmailAndPassword(this.loginForm.value.userEmail,this.loginForm.value.userPassword);
  }


  ngOnInit() {
  }

}
