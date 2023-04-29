import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyArMvgliwrnIi_zEmXC1FntJqDA4Z99Yrw",
  authDomain: "traveloguide-41ac5.firebaseapp.com",
  projectId: "traveloguide-41ac5",
  storageBucket: "traveloguide-41ac5.appspot.com",
  messagingSenderId: "917668307983",
  appId: "1:917668307983:web:8ed75c21c114c01e79ef7a",
  measurementId: "G-X591J016G1"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

