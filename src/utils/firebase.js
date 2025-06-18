// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaLw43d5omEqtraxTVUbr2QbP8WYI4aIQ",
  authDomain: "netflix-gpt-f26c6.firebaseapp.com",
  projectId: "netflix-gpt-f26c6",
  storageBucket: "netflix-gpt-f26c6.firebasestorage.app",
  messagingSenderId: "493342354318",
  appId: "1:493342354318:web:5dc223add4d03823b7d2df",
  measurementId: "G-VB39RT38R4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();