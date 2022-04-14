import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAr1OmGSUN1m89SHKyBFjFAlLw8dYBeO7E",
  authDomain: "nlak-church.firebaseapp.com",
  projectId: "nlak-church",
  storageBucket: "nlak-church.appspot.com",
  messagingSenderId: "1037848602634",
  appId: "1:1037848602634:web:5d9196a67ab5c4a33a57f3"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth } 