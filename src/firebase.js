// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,doc} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAGWfyflXQrjA4rTSDedGzrakdymbuROc",
  authDomain: "finastra-e2634.firebaseapp.com",
  projectId: "finastra-e2634",
  storageBucket: "finastra-e2634.firebasestorage.app",
  messagingSenderId: "450527309806",
  appId: "1:450527309806:web:67d17a5b7f58bdc6fba8ff",
  measurementId: "G-SFTJJHES8H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);