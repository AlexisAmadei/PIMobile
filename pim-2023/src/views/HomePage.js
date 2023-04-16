import React from "react";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { auth, db } from "../config/firebaseConfig";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";

import logoText from "../assets/logoText.svg";
import groupSquares from "../assets/groupSquares.svg";
import iconChatApp from "../assets/iconChatApp.svg";
import iconProfile from "../assets/iconProfile.svg";

import ProfileCard from "../components/ProfileCard";
import { onAuthStateChanged } from "firebase/auth";
import { setCurrentUser, setDestinationUser } from "../utils/CurrentUser";

export default function HomePage() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [userUID, setUserUID] = useState(null);

  const handleClickChat = () => {
    navigate("/chatApp");
  };
  const handleClickProfile = () => {
    navigate("/profile");
  };

  useEffect(() => {
    const getUserUID = async () => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUserUID(user.uid);
          setCurrentUser(user.uid);
        }
      });
      return () => {
        unsubscribe();
      };
    };
    const getAllUsers = async () => {
      const querySnapshot = await getDocs(collection(db, "users"));
      const usersData = [];
      querySnapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    };
    getUserUID();
    getAllUsers();
  }, []);
  return (
    <div className="globalHomeContainer">
      <div className="headerContainer">
        <div className="headerHome">
          <div className="headerLeft">
            <img src={groupSquares} />
          </div>
          <div className="headerCenter">
            <img src={logoText} />
          </div>
          <div className="headerRight">
            <img onClick={handleClickChat} id="left" src={iconChatApp} />
            <img onClick={handleClickProfile} id="right" src={iconProfile} />
          </div>
        </div>
      </div>
      <div className="bodyHome" key={users.id}>
        {users.map((user) => (
          <ProfileCard
            key={user.id}
            age={user.age}
            pseudo={user.pseudo}
            centerInterest={user.center}
            nativeLang={user.nativeLang}
            profession={user.profession}
            userUID={user.id}
          />
        ))}
      </div>
    </div>
  );
}