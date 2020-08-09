import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { LOCALE_ID, Inject } from '@angular/core';


@Injectable({
    providedIn: 'root'
  })
  export class HeaderService {


    public editDataDetails: any = [];
    public subject = new Subject<any>();

    private langue = new BehaviorSubject('fr');
    currentLangue = this.langue.asObservable();

    defaultLang = this.translateService.getBrowserLang();

    constructor(
        private translateService: TranslateService,
        @Inject(LOCALE_ID) public locale: string
        ) {
            translateService.setDefaultLang(this.defaultLang);   
     }



     useLanguage(language: string){
         this.translateService.use(language)
         this.langue.next(language)
    }
  }