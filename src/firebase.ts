// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1EBwPNqicJfuygSKfpy4te8CajzSFvL4",
  authDomain: "factoryjet-c5f8a.firebaseapp.com",
  projectId: "factoryjet-c5f8a",
  storageBucket: "factoryjet-c5f8a.firebasestorage.app",
  messagingSenderId: "687943384982",
  appId: "1:687943384982:web:2bf9fb0e4c2c977e8b27b7",
  measurementId: "G-ZZ03T8W2VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };
