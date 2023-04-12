import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../config/firebaseConfig";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    <Box
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        px: 4,
        py: 6,
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="" style={{
        width: '100%',
        height: '100%'
      }}>
      </div>
      <Typography component="h1" variant="h5">
          Sign in
        </Typography>
      <form className="loginForm" onSubmit={handleLogin}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="password"
        label="Password"
        name="password"
        autoFocus
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Login
      </Button>
      </form>
      <Button className="googleLogin Button" onClick={handleGoogleLogin}>
        <img src={googleLogo} alt="Logo Google" height={40} /></Button>
      <Link to="/security/register">Register</Link>
    </Box>
  );
}