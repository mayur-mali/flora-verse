// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOF4SeSia6SaoTrKzxfdBFyGd63QBEnsY",
  authDomain: "life-of-plants.firebaseapp.com",
  projectId: "life-of-plants",
  storageBucket: "life-of-plants.appspot.com",
  messagingSenderId: "900446510064",
  appId: "1:900446510064:web:3208cfee706a980bcf9b35",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export default app;
