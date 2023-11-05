// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-Oe9tuMicFowiDYFkLM_Ma9pu5DJ5SDc",
  authDomain: "portfolio-f90ee.firebaseapp.com",
  projectId: "portfolio-f90ee",
  storageBucket: "portfolio-f90ee.appspot.com",
  messagingSenderId: "984334826452",
  appId: "1:984334826452:web:8795257f58761fae26b441",
  measurementId: "G-1N6JQXXVY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log("Firebase Initialized");