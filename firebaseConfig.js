// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtksjb6Hh9h5ib9mEKrYm_uQXxgVKbx0c",
  authDomain: "tcc-bd-1.firebaseapp.com",
  databaseURL: "https://tcc-bd-1-default-rtdb.firebaseio.com",
  projectId: "tcc-bd-1",
  storageBucket: "tcc-bd-1.appspot.com",
  messagingSenderId: "857233936113",
  appId: "1:857233936113:web:ad3b0c680d0ec6fa996350",
  measurementId: "G-M9G2DV0E57"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);;
