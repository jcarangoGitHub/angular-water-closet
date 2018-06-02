import { Component, OnInit } from '@angular/core';
import {User} from 'src/app/model/user'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  user = new User("user", "password")

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }

  ngOnInit() {
  }

  loginUser(){
    this.user = new User("", "")
  }

}
