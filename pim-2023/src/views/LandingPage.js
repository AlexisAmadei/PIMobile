import React from "react";
import { Navigate, Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <div>
            <h1>Landing Page</h1>
            <p className="returnToLogin">
                Déjà un compte ?
                <Link id="linkRouter" to="/security/login"> Se Connecter</Link>
            </p>
            <p className="returnToLogin">
                register ?
                <Link id="linkRouter" to="/security/register">register</Link>
            </p>
        </div>
    );
}