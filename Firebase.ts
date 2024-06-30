// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAknZuvGvF01f3aEl6nl833ywNJ8iNLw4I",
  authDomain: "twist-app-1.firebaseapp.com",
  projectId: "twist-app-1",
  storageBucket: "twist-app-1.appspot.com",
  messagingSenderId: "198332326762",
  appId: "1:198332326762:web:0b627c0aacb14a79963b13",
  measurementId: "G-LXCMPF2GZF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
