import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  response = '';
  error = '';

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signIn(email, password);
    this.authService.signInRes.subscribe(
      (res) => {
        console.log(res);
        this.response = res;
      }
    );

    this.authService.signInErr.subscribe(
      (err) => {
        this.error = err;
      }
    )
  }

}
