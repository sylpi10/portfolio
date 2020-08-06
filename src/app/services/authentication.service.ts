import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  // signupUser(email: string, password: string){
  //   return new Promise (
  //     (resolve, reject) => {
  //       firebase.auth().createUserWithEmailAndPassword(email, password).then(
  //         () => {
  //           console.log('connected');
  //           resolve();
  //         }
  //       ).catch(
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     }
  //   );
  // }
signinUser(email: string, password: string){
  return new Promise (
        (resolve, reject) => {
          firebase.auth().signInWithEmailAndPassword(email, password).then(
            (data) => {
              console.log('logged');
              resolve(data);
            }
          ).catch(
            (error) => {
              reject(error);
            }
          );
        }
      );
}

}
