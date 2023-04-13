import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";

import Logout from "./views/Logout";
import SecurityLayout from "./layout/SecurityLayout";
import PrivateLayout from "./layout/PrivateLayout";
import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import SujetConversation from "./views/SujetConversation";

import "./App.css";

const theme = createTheme({
  typography: {
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  }
})

export default function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => setUser(user || false));

  if (user === null) return <div>Loading...</div>;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/security" element={<SecurityLayout user={user} />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateLayout user={user} />}>
          <Route path="logout" element={<Logout />} />
          <Route path="/" element={<SujetConversation />}>
            <Route path="home" element={<HomePage />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
