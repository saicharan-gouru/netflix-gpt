// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCnGZ637gP5DK009R2yhmTTdFaJ-X5fwBA",
    authDomain: "netflix-gpt-b1136.firebaseapp.com",
    projectId: "netflix-gpt-b1136",
    storageBucket: "netflix-gpt-b1136.appspot.com",
    messagingSenderId: "145219840431",
    appId: "1:145219840431:web:773da64488e51d9573275a",
    measurementId: "G-1LDKVKCT6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);