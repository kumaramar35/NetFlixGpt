// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { 
  apiKey: "AIzaSyDcxQBP95c5OWJyDo6kQocka9027TPR2q8",
  authDomain: "netflixgpt-8497f.firebaseapp.com",
  projectId: "netflixgpt-8497f",
  storageBucket: "netflixgpt-8497f.appspot.com",
  messagingSenderId: "306271380398",
  appId: "1:306271380398:web:ebf517e5f272111b825e3f",
  measurementId: "G-K7NZBXE0BL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();