import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import { db, auth } from "../config/firebaseConfig";
import { getDocs, collection } from "firebase/firestore";


import "../css/Profile.css"

import profileIcon from "../assets/profileIcon.svg"
import frFlag from "../assets/frFlag.svg"
import pglFlag from "../assets/pglFlag.svg"
import bellIcon from "../assets/bell.svg"
import langIcon from "../assets/langIcon.svg"
import lockIcon from "../assets/lockIcon.svg"

export default function ProfilePage() {
    const logOut = () => {
        auth.signOut();
    };
    const [userInfo, setUserInfo] = useState([]);
    const userCollection = collection(db, "users");
    useEffect(() => {
        const getUserInfo = async () => {
            try {
                const data = await getDocs(userCollection);
                const filteredData = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }));
                setUserInfo(filteredData);
            } catch (err) { console.error(err); }
        };
        getUserInfo();
    }, []);
    return (
        <div className="globalProfileContainer">
            <div className="profileContainer">
                <h1>Profil</h1>
                {userInfo.map((userInfo) => (
                    <div className="userPreview">
                        <img src={profileIcon} height={50} alt="profileIcon" />
                        <p className="userName">{userInfo.pseudo}</p>
                    </div>
                ))}
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
