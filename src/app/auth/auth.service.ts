import * as firebase from 'firebase';
import {Subject} from "rxjs/Subject";
import {Router} from "@angular/router";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {

  error = new Subject<any>();
  response = new Subject<any>();
  signInRes = new Subject<any>();
  signInErr = new Subject<any>();
  token: string;

  constructor(private router: Router) {}

  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (res) => {
          this.response.next('User successfuly authenticated!');
        }
      )
      .catch(
        (err) => {
          this.error.next(err);
        }
      );
  }

  signIn(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (res) => {
          console.log(res);
          this.signInRes.next(`${res['email']} successfully signed in!`);
          this.router.navigate(['/recipes']);
          firebase.auth().currentUser.getToken()
            .then(
              (token: string) => {
                this.token = token;
              }
            );
        }
      )
      .catch(
        (err) => {
          console.log(err);
          this.signInErr.next(err['message']);
        }
      );
  }

  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
        (token: string) => {
          this.token = token;
        }
      );
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

  logOut() {
    firebase.auth().signOut();
    this.token = null;
  }
}
