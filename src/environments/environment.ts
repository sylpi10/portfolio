// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyCGrBat841IY2eG_n0L8MLoY0TjlPXSbTw",
    authDomain: "the-portfolio10.firebaseapp.com",
    databaseURL: "https://the-portfolio10.firebaseio.com",
    projectId: "the-portfolio10",
    storageBucket: "the-portfolio10.appspot.com",
    messagingSenderId: "926285666578",
    appId: "1:926285666578:web:b026ada6f954d691853bcb"
  },
  
  
}
firebase.initializeApp(environment.firebaseConfig);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI /*
