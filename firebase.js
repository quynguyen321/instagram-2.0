// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvF5lEK1QnqLRZN0Oyez14EH3_QfDeniY",
  authDomain: "insta-2-bdede.firebaseapp.com",
  projectId: "insta-2-bdede",
  storageBucket: "insta-2-bdede.appspot.com",
  messagingSenderId: "626985531028",
  appId: "1:626985531028:web:7e4a3ee20ab9b0e16ce681"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp(); 
const db = getFirestore();
const storage = getStorage();

export{app, db, storage}