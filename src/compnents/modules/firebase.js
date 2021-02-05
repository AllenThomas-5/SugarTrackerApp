import firebase from 'firebase/app'
import 'firebase/firebase-firestore'
//import firebase from "firebase/app";




const firebaseApp = firebase.initializeApp({
  // copy and paste your firebase credential 
    /*
  replace this object with yours
  */
    apiKey: "AIzaSyCHtIl9Unhtc3gtaeYRKHUQtIclwhwyOUo",
    authDomain: "sugarapptest-ebb6f.firebaseapp.com",
    databaseURL: "https://sugarapptest-ebb6f.firebaseio.com",
    projectId: "sugarapptest-ebb6f",
    storageBucket: "sugarapptest-ebb6f.appspot.com",
    messagingSenderId: "382683523689",
    appId: "1:382683523689:web:27d74c5130b09234db50f8",
    measurementId: "G-GQ7MYX3SWB"

});


// Initialize Firebase
//const firebaseApp = firebase.initializeApp(firebaseConfig);
//var fireDb = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export  {db};