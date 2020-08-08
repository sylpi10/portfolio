import { Injectable } from '@angular/core';
import { Router, CanActivate, ResolveEnd } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService  implements CanActivate{

  constructor(
    private router: Router
  ) { }

  canActivate(): Promise<boolean>{
    return new Promise(
      (resolve, reject) => {
        firebase.auth().onAuthStateChanged(
          // if user connected => can access route
          (userSession) => {
            if (userSession) {
              resolve(true);
            } else{
              this.router.navigate(['/home']);
              resolve(false);
            }
          }
        )
      }
    );
  }

}
