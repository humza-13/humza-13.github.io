// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";

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