// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALadZeqETUXs2OlYF1_oKSldCRyvEXPGg",
  authDomain: "my-portfolio-e7217.firebaseapp.com",
  projectId: "my-portfolio-e7217",
  storageBucket: "my-portfolio-e7217.appspot.com",
  messagingSenderId: "793560447669",
  appId: "1:793560447669:web:cfd85b4cfdfc4031395cfc",
  measurementId: "G-V5X1JXMWZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
