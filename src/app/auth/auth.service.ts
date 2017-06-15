import * as firebase from 'firebase';
import {Injectable} from "@angular/core";

@Injectable()
export class AuthService {
  error: any;
  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        (err) => {
          this.error = err;
        }
      );
  }
}
