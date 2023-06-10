// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmKWvhyOozwWalhzILqebHXU6C8CGmSG0",
  authDomain: "expenses-6f3a1.firebaseapp.com",
  projectId: "expenses-6f3a1",
  storageBucket: "expenses-6f3a1.appspot.com",
  messagingSenderId: "718334636215",
  appId: "1:718334636215:web:b5ba44cd29de352bdd5d32",
  measurementId: "G-28C4TFMGTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(firebaseApp);