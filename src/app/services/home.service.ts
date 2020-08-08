import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class HomeService {

    public isHome: BehaviorSubject<boolean> = new BehaviorSubject(false);

    emitHome() {
      this.isHome.next(true);
      console.log('coucou from home service');
    }

    constructor() {

     }

  }