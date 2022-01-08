// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQIqKeGEqny0wAuVtCNp4QsSylLwni9Hw",
  authDomain: "portfolioblog-4a1be.firebaseapp.com",
  projectId: "portfolioblog-4a1be",
  storageBucket: "portfolioblog-4a1be.appspot.com",
  messagingSenderId: "734096534181",
  appId: "1:734096534181:web:f4ef922fee1b59a1757b4c",
  measurementId: "G-FT23GSF28N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);