import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD0bdNN9ukO3KxOQdSNhD6UoZB55ojbPlk",
    authDomain: "anfapp-8116b.firebaseapp.com",
    databaseURL: "https://anfapp-8116b.firebaseio.com",
    projectId: "anfapp-8116b",
    storageBucket: "anfapp-8116b.appspot.com",
    messagingSenderId: "758712858031",
    appId: "1:758712858031:web:24b9f3492c073104adeb5a"
  };
  

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };