// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJw5NFiHw-XAHMC6ld0ot4oZGvZGBQZPI",
    authDomain: "react-firebase-bde3f.firebaseapp.com",
    projectId: "react-firebase-bde3f",
    storageBucket: "react-firebase-bde3f.firebasestorage.app",
    messagingSenderId: "537329816976",
    appId: "1:537329816976:web:8526fa7e28f3f2b9bb4f15",
    measurementId: "G-XLTND41TR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);