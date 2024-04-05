// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXNL4YLWi-ITFWyKS390Oh3r8U8hOD3pc",
  authDomain: "expensity-3a6d1.firebaseapp.com",
  projectId: "expensity-3a6d1",
  storageBucket: "expensity-3a6d1.appspot.com",
  messagingSenderId: "547784827538",
  appId: "1:547784827538:web:e2cd5afeee21ab3a333c4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const tripRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
