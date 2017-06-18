import * as firebase from 'firebase';
import {Subject} from "rxjs/Subject";


export class AuthService {
  error = new Subject<any>();
  response = new Subject<any>();
  signInRes = new Subject<any>();
  signInErr = new Subject<any>();
  token: string;

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
}
