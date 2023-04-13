import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6fDSBZ8KZlCyt75xOOLuetUBDJefqhjA",
    authDomain: "pimobile-41942.firebaseapp.com",
    projectId: "pimobile-41942",
    storageBucket: "pimobile-41942.appspot.com",
    messagingSenderId: "949606428284",
    appId: "1:949606428284:web:a94186d437339e76c723f9",
    measurementId: "G-Y6HVPDZK6R"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth(app);
