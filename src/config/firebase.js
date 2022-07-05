// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
  const firebaseConfig = {
  apiKey: "AIzaSyAngg0Yt5SV3frYbwv91LsqmhkJl5AhfUs",
  authDomain: "budget-app-bd494.firebaseapp.com",
  projectId: "budget-app-bd494",
  storageBucket: "budget-app-bd494.appspot.com",
  messagingSenderId: "1024796384404",
  appId: "1:1024796384404:web:ef82062e21a757b5142881",
  measurementId: "G-HGLR0Q1B64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db=getFirestore(app);
export {auth, db}
