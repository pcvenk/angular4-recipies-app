import * as firebase from 'firebase';

export class AuthService {
  signUp(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        err => console.log(err)
      );
  }
}
