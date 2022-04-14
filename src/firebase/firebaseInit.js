import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7TFT969ErEBr6lCNGijDHSpNxInKKVb4",
  authDomain: "invoice-app-4b837.firebaseapp.com",
  projectId: "invoice-app-4b837",
  storageBucket: "invoice-app-4b837.appspot.com",
  messagingSenderId: "551341183596",
  appId: "1:551341183596:web:9ba50c7b1f63d9bc17fe49"
};

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth } 