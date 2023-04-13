import React from "react";

import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";


export default function HomePage() {
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) { console.error(err); }
    };
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={logout}>Logout</button>
        </div>
    );
}