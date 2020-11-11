import * as firebase from 'firebase';

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "AIzaSyCGrBat841IY2eG_n0L8MLoY0TjlPXSbTw",
    authDomain: "the-portfolio10.firebaseapp.com",
    databaseURL: "https://the-portfolio10.firebaseio.com",
    projectId: "the-portfolio10",
    storageBucket: "the-portfolio10.appspot.com",
    messagingSenderId: "926285666578",
    appId: "1:926285666578:web:b026ada6f954d691853bcb"
  },
};

firebase.initializeApp(environment.firebaseConfig);
