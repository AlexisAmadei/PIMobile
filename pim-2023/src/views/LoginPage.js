import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import googleLogo from '../assets/googleLogo.svg'
import "../css/LoginPage.css"


export default function LoginPage() {
  const [error, setError] = useState(null);
  const handleLogin = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };
  const handleGoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div className="globalLoginContainer">
      <div className="loginContainer">
        <p id="seConnecter">Se connecter</p>
        <form onSubmit={handleLogin} className="loginForm">
          <TextField className="textField"
            id="standard-basic"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            autoFocus
            required
          />
          <TextField className="textField"
            id="standard-basic"
            label="Mot de passe"
            name="password"
            required
          />
          <p className="resetPassword">
            <Link id="linkRouter" to="/security/register"> Mot de passe oublié ?</Link>
          </p>
          <input className="acceptButton" type="submit" value="Continuer" />
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
        <button className="registerWithGoogle" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google logo" />Continuer avec Google
        </button>
        <p className="returnToLogin">
          Pas encore inscrit ?
          <Link id="linkRouter" to="/security/register"> S'inscrire</Link>
        </p>
      </div>
    </div>
  );
}