// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCCZlkHBn2NZWNvjLJ7lMbIgHm3L2syWA",
    authDomain: "genius-car-service-69a74.firebaseapp.com",
    projectId: "genius-car-service-69a74",
    storageBucket: "genius-car-service-69a74.appspot.com",
    messagingSenderId: "715141277312",
    appId: "1:715141277312:web:6fe50d3652e58786882865"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;