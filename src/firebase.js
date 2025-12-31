// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQlEHLtggiPTL3GeFW4sLUK-HyPQ-QFLU",
  authDomain: "web-cour.firebaseapp.com",
  projectId: "web-cour",
  storageBucket: "web-cour.firebasestorage.app",
  messagingSenderId: "985904137755",
  appId: "1:985904137755:web:da4a91197838ff75a75abe",
  measurementId: "G-2JZ9B04GZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);