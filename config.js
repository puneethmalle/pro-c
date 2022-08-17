import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChzsy3KtR20m5saxNZuXHqzWIRNIso0uw",
  authDomain: "buzzer-app-2f4d6.firebaseapp.com",
  databaseURL: "https://buzzer-app-2f4d6-default-rtdb.firebaseio.com",
  projectId: "buzzer-app-2f4d6",
  storageBucket: "buzzer-app-2f4d6.appspot.com",
  messagingSenderId: "1033747145580",
  appId: "1:1033747145580:web:3ad5375bd2deccc79b0949",
  measurementId: "G-CVCP2PP5E1"
};

// Initialize Firebase
let app = firebase.initializeApp(firebaseConfig);
export const db = app.database();
