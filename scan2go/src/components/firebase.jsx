// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsxTv7fIgioIdtXRjRHCkSqwaLNsoDWRM",
  authDomain: "otp-verification-8daad.firebaseapp.com",
  projectId: "otp-verification-8daad",
  storageBucket: "otp-verification-8daad.appspot.com",
  messagingSenderId: "380177728994",
  appId: "1:380177728994:web:d69404eb2ea591739fa5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);