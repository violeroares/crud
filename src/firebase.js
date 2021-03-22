import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC980GTZUK7o2p9FCO2hNukezhaU8a4gSk",
    authDomain: "crud-f57b8.firebaseapp.com",
    projectId: "crud-f57b8",
    storageBucket: "crud-f57b8.appspot.com",
    messagingSenderId: "162515577712",
    appId: "1:162515577712:web:07ef94da8f603c486c3db5"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)