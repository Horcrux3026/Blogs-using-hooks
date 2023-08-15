// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSLjN_MDGCKp_iVrwDfL-6zdNPLGukVIo",
  authDomain: "blog-using-hooks-b56b9.firebaseapp.com",
  projectId: "blog-using-hooks-b56b9",
  storageBucket: "blog-using-hooks-b56b9.appspot.com",
  messagingSenderId: "712864734171",
  appId: "1:712864734171:web:07f6d5ea3e52443b57a5fe"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export the Firestore instance
export const db = firebase.firestore();

