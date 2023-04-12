import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import TextField from "@mui/material/TextField";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";

import "../css/RegisterPage.css";
import googleLogo from '../assets/googleLogo.svg'

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");
    createUserWithEmailAndPassword(auth, email, password).catch((error) => {
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
    <div className="globalRegisterContainer">
      <div className="registerContainer">
        <p>Ajoutez vos informations</p>
        <form onSubmit={handleRegister} className="registerForm">
          <TextField className="textField"
            margin="normal"
            required
            id="standard-basic"
            label="Prénom"
            name="firstName"
            autoFocus
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Nom"
            name="lastName"
            required
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            required
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Mot de passe"
            name="password"
            required
          />
          <p className="cgu">
            En sélectionnant <span>Accepter et continuer</span>, j’accepte les Conditions de service, les Conditions de service relatives aux paiements, la Politique de 
            non-discrimination et la Politique de confidentialité de Donkon
          </p>
          <input className="acceptButton" type="submit" value="Accepter et continuer" />
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
        <button className="registerWithGoogle" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google logo" />Continuer avec Google
        </button>
        <p className="returnToLogin">
          Déjà un compte ?
          <Link id="linkRouter" to="/security/login"> Se Connecter</Link>
        </p>
      </div>
    </div>
  );
}
