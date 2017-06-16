import * as firebase from 'firebase';
import {Subject} from "rxjs/Subject";


export class AuthService {
  error = new Subject<any>();
  response = new Subject<any>();

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
}
