import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBq_TragUVjrfAhqVthXc7pqmz7p4Xjs8A",
  authDomain: "react-auth-db54a.firebaseapp.com",
  projectId: "react-auth-db54a",
  storageBucket: "react-auth-db54a.appspot.com",
  messagingSenderId: "996243233219",
  appId: "1:996243233219:web:edc49d8a83a71ab8520576"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
