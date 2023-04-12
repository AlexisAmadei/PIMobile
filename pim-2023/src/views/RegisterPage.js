import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";

import "../css/RegisterPage.css";

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
            autoFocus
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Adresse e-mail"
            name="email"
            autoComplete="email"
            required
            autoFocus
          />
          <TextField className="textField"
            margin="normal"
            id="standard-basic"
            label="Mot de passe"
            name="password"
            required
            autoFocus
          />
          <input className="acceptButton" type="submit" value="Accepter et continuer" />
        </form>
        <Link to="/security/login">Login</Link>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}
