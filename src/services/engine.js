import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC-CM08uLUlEHWzVp25eACK4LM7szYUTdc",
  authDomain: "quizapp-c4a70.firebaseapp.com",
  projectId: "quizapp-c4a70",
  storageBucket: "quizapp-c4a70.appspot.com",
  messagingSenderId: "1089566960350",
  appId: "1:1089566960350:web:d6ba68fda43e39a7ed704f",
  measurementId: "G-MSF7G07678"
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { app, auth, db };
