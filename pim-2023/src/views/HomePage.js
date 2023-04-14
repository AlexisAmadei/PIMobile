import React from "react";

import { updateDoc, doc } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";
import { signOut } from "firebase/auth";
import { Link, NavLink } from "react-router-dom";


export default function HomePage() {
    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) { console.error(err); }
    };
    const chatApp = () => {
        console.log("redirect chatApp");
    }
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={logout}>Logout</button>
            <Link to="/chatApp">Chat App</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}