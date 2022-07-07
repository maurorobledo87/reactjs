import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDvpxbwW02zJhSqng35pdwM1OmSaLjMamk",
  authDomain: "sportshirts-49ec0.firebaseapp.com",
  projectId: "sportshirts-49ec0",
  storageBucket: "sportshirts-49ec0.appspot.com",
  messagingSenderId: "48037932857",
  appId: "1:48037932857:web:77d1d952433359a71802e8",
  measurementId: "G-ZH6F9Z2VJB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);