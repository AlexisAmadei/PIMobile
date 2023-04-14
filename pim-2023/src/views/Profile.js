import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";


import "../css/Profile.css"

import profileIcon from "../assets/profileIcon.svg"
import frFlag from "../assets/frFlag.svg"
import pglFlag from "../assets/pglFlag.svg"
import bellIcon from "../assets/bell.svg"
import langIcon from "../assets/langIcon.svg"
import lockIcon from "../assets/lockIcon.svg"
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function ProfilePage() {
  const [userUID, setUserUID] = useState(null);
  const [pseudo, setPseudo] = useState('');

  const logOut = () => {
    const auth = getAuth();
    auth.signOut();
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserUID(user.uid);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!userUID) return;

    const getElementInDoc = async () => {
      const docRef = doc(db, "users", userUID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data().pseudo);
        setPseudo(docSnap.data().pseudo);
      } else {
        console.log("No such document!");
      }
    };

    getElementInDoc();
  }, [userUID]);

  return (
    <div className="globalProfileContainer">
      <div className="profileContainer">
        <h1>Profil</h1>
        <div className="userPreview">
          <img src={profileIcon} height={50} alt="profileIcon" />
          <p className="userName">{pseudo}</p>
        </div>
        {/* {userInfo.map((userInfo) => (
        ))} */}
        <div className="breakLine" />
        <div className="languageFlags">
          <img src={frFlag} alt="frFlag"></img>
          <img src={pglFlag} alt="pglFlag"></img>
        </div>
        <div className="settings">
          <p>Paramètres</p>
          <li className="listItem">
            <img src={profileIcon} alt="profileIcon" height={20} />
            <p>Informations personnelles</p>
          </li>
          <div className="breakLine" />
          <li className="listItem">
            <img src={bellIcon} alt="bellIcon" height={20} />
            <p>Notifications</p>
          </li>
          <div className="breakLine" />
          <li className="listItem">
            <img src={langIcon} alt="langIcon" height={20} />
            <p>Languages</p>
          </li>
          <div className="breakLine" />
          <li onClick={logOut} className="listItem">
            <img src={lockIcon} alt="lockIcon" height={20} />
            <p>Se deconnecter</p>
          </li>
          <div className="breakLine" />
        </div>
      </div>
    </div>
  );
}
