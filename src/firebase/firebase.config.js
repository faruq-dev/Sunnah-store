// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1NNju0TdfvxusJ3DXVVGN1KORntXnkXA",
  authDomain: "sunnah-store-4c5e2.firebaseapp.com",
  projectId: "sunnah-store-4c5e2",
  storageBucket: "sunnah-store-4c5e2.firebasestorage.app",
  messagingSenderId: "910868281469",
  appId: "1:910868281469:web:5e9a9809eef5f0c9a11914",
  measurementId: "G-EBGBGGDEGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth(app);