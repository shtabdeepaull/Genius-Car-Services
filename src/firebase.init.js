// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2XchYeiT6TbU5CipIM3p6mGghJRN37M0",
  authDomain: "genius-car-services-994d0.firebaseapp.com",
  projectId: "genius-car-services-994d0",
  storageBucket: "genius-car-services-994d0.appspot.com",
  messagingSenderId: "380464534577",
  appId: "1:380464534577:web:d97458709c44d595a97110"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;