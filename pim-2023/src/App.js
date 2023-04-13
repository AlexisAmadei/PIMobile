import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebaseConfig";
import { db } from "./config/firebaseConfig";
import "firebase/auth";
import "firebase/firestore";

import Logout from "./views/Logout";
import SecurityLayout from "./layout/SecurityLayout";
import PrivateLayout from "./layout/PrivateLayout";
import OnBoard from "./layout/OnboardLayout";

import LoginPage from "./views/LoginPage";
import HomePage from "./views/HomePage";
import RegisterPage from "./views/RegisterPage";
import SujetConversation from "./views/SujetConversation";
import LangSelect from "./views/LanguageSelect";
import ProfilePage from "./views/Profile";

import Loading from "./components/Loading"

import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (user) => setUser(user || false));

  // if (user === null) return <Loading />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/security" element={<SecurityLayout user={user} />}>
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
        <Route path="/" element={<PrivateLayout user={user} />}>
          <Route path="logout" element={<Logout />} />
          <Route path="" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
