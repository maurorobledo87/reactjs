import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyDkmti1Ba4VnZ_4B32iwtTBugL9JGDXQ",
  authDomain: "sportshirt-96685.firebaseapp.com",
  projectId: "sportshirt-96685",
  storageBucket: "sportshirt-96685.appspot.com",
  messagingSenderId: "768077253825",
  appId: "1:768077253825:web:8f0be0e4f51375144ed840"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);