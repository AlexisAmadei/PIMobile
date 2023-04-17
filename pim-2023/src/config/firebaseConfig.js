import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDa_7QWVqlMKGLwxcDcrMVWtxTBx-SIUSA",
    authDomain: "limo-56eb1.firebaseapp.com",
    projectId: "limo-56eb1",
    storageBucket: "limo-56eb1.appspot.com",
    messagingSenderId: "695754957441",
    appId: "1:695754957441:web:7d9df3d777e5475aa32380",
    measurementId: "G-EBPG858B0L"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
