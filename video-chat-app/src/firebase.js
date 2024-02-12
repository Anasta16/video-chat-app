// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBS3onjSb6xd59yDBRuFyzsTslxA0zZ1A0",
  authDomain: "drinko-app-draft.firebaseapp.com",
  projectId: "drinko-app-draft",
  storageBucket: "drinko-app-draft.appspot.com",
  messagingSenderId: "992613600717",
  appId: "1:992613600717:web:29748500efddc6751a0884"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();