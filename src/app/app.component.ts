import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';

  constructor(){
    const firebaseConfig = {
      apiKey: "AIzaSyCGrBat841IY2eG_n0L8MLoY0TjlPXSbTw",
      authDomain: "the-portfolio10.firebaseapp.com",
      databaseURL: "https://the-portfolio10.firebaseio.com",
      projectId: "the-portfolio10",
      storageBucket: "the-portfolio10.appspot.com",
      messagingSenderId: "926285666578",
      appId: "1:926285666578:web:b026ada6f954d691853bcb"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
