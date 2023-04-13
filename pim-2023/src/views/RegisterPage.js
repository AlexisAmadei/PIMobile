import React, { useState } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import 'firebase/firestore';
import { auth } from "../config/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { db } from "../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import "../css/RegisterPage.css";
import googleLogo from '../assets/googleLogo.svg'

export default function RegisterPage() {
  const [error, setError] = useState(null);
  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const pseudo = formData.get("pseudo");
    const age = formData.get("age");
    const profession = formData.get("Profession");
    const email = formData.get("email");
    const password = formData.get("password");
    const profileComplete = false;
    addDoc(collection(db, "users"), {
      pseudo,
      age,
      profession,
      email,
      password,
      profileComplete,
    });
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
            label="Pseudo"
            name="pseudo"
            autoFocus
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Age"
            name="age"
            required
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Profession"
            name="Profession"
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