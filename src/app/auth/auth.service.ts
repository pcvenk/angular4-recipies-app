import * as firebase from 'firebase';
import {Subject} from "rxjs/Subject";


export class AuthService {
  error = new Subject<any>();
  response = new Subject<any>();
  signInRes = new Subject<any>();
  signInErr = new Subject<any>();

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
          this.signInRes.next(`${res['email']} successfully signed in!`)
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
    return firebase.auth().currentUser.getToken();
  }
}
