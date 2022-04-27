// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyDkmti1Ba4VnZ_4B32iwtTBugL9JGDXQ",
  authDomain: "sportshirt-96685.firebaseapp.com",
  projectId: "sportshirt-96685",
  storageBucket: "sportshirt-96685.appspot.com",
  messagingSenderId: "768077253825",
  appId: "1:768077253825:web:8f0be0e4f51375144ed840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);