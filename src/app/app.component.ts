import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  currentLang:string;

  constructor(
    private translate: TranslateService,
    private headerService: HeaderService
  ){

    this.translate.setDefaultLang('fr');

    const firebaseConfig = {
      apiKey: "AIzaSyCGrBat841IY2eG_n0L8MLoY0TjlPXSbTw",
      authDomain: "the-portfolio10.firebaseapp.com",
      databaseURL: "https://the-portfolio10.firebaseio.com",
      projectId: "the-portfolio10",
      storageBucket: "the-portfolio10.appspot.com",
      messagingSenderId: "926285666578",
      appId: "1:926285666578:web:b026ada6f954d691853bcb"
    };

    // init Firebase
    firebase.initializeApp(firebaseConfig);
  }
  ngOnInit(): void {

        // get the langue from header service
        // this.headerService.currentLangue.subscribe(
        //   lang => this.currentLang = lang)
  }
}
