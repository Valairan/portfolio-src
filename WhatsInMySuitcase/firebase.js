// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5J1oqIfIq3YcRHNWDezRKWiJmtnNhIxk",
  authDomain: "suitcaseinventory.firebaseapp.com",
  databaseURL: "https://suitcaseinventory-default-rtdb.firebaseio.com",
  projectId: "suitcaseinventory",
  storageBucket: "suitcaseinventory.appspot.com",
  messagingSenderId: "992755110480",
  appId: "1:992755110480:web:68a6162a8aaf14001bb755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);