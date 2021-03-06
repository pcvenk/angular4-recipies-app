import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  errorMsg = '';
  successMsg = '';

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password);
    this.authService.error.subscribe(
      (error) => {
        console.log(error['message']);
        this.errorMsg = error['message'];
      }
    );
    this.authService.response.subscribe(
      (response) => {
        console.log(response);
        this.successMsg = response;
      }
    );
  }

}
