// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQLKICiZmb0aTFC1_hoD1WAv2FhsFg52c",
  authDomain: "prepwise-31372.firebaseapp.com",
  projectId: "prepwise-31372",
  storageBucket: "prepwise-31372.firebasestorage.app",
  messagingSenderId: "927581370182",
  appId: "1:927581370182:web:9c29a37ea0d0be4dde9747",
  measurementId: "G-JPM41J7W83",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore();
